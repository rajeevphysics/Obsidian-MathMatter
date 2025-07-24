var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => PhraseSync
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
function fuzzyMatch(query, text) {
  const queryChars = query.toLowerCase().split("");
  const textLower = text.toLowerCase();
  let searchIndex = 0;
  for (const char of queryChars) {
    const foundIndex = textLower.indexOf(char, searchIndex);
    if (foundIndex === -1)
      return false;
    searchIndex = foundIndex + 1;
  }
  return true;
}
var PhraseSync = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    __publicField(this, "index", /* @__PURE__ */ new Map());
    __publicField(this, "metadataCache");
    // silasm01 added non-null assertion
    __publicField(this, "vault");
    // silasm01 added non-null assertion
    __publicField(this, "isIndexing", false);
    __publicField(this, "debounceTimeout");
  }
  normalizeText(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^\p{L}\p{N}]/gu, "");
  }
  async deleteFromIndex(file) {
    for (const [key, entries] of this.index.entries()) {
      const filtered = entries.filter((entry) => entry.notePath !== file.path);
      if (filtered.length > 0) {
        this.index.set(key, filtered);
      } else {
        this.index.delete(key);
      }
    }
  }
  renameInIndex(file, oldPath) {
    for (const [key, entries] of this.index.entries()) {
      const updatedEntries = entries.map((entry) => {
        if (entry.notePath === oldPath) {
          return {
            ...entry,
            notePath: file.path,
            noteTitle: file.basename
          };
        }
        return entry;
      });
      this.index.set(key, updatedEntries);
    }
  }
  async onload() {
    this.metadataCache = this.app.metadataCache;
    this.vault = this.app.vault;
    await this.buildFullIndex();
    this.registerEvent(this.metadataCache.on("changed", (file) => this.debouncedIndexUpdate(file)));
    this.registerEvent(this.vault.on("create", (file) => {
      if (file instanceof import_obsidian.TFile)
        this.debouncedIndexUpdate(file);
    }));
    this.registerEvent(this.vault.on("delete", (file) => {
      if (file instanceof import_obsidian.TFile)
        this.deleteFromIndex(file);
    }));
    this.registerEvent(this.vault.on("rename", (file, oldPath) => {
      if (file instanceof import_obsidian.TFile)
        this.renameInIndex(file, oldPath);
    }));
    this.registerEditorSuggest(new PhraseSyncSuggest(this));
  }
  async buildFullIndex() {
    if (this.isIndexing)
      return;
    this.isIndexing = true;
    this.index.clear();
    const markdownFiles = this.vault.getMarkdownFiles();
    for (const file of markdownFiles)
      await this.indexFile(file);
    this.isIndexing = false;
  }
  async indexFile(file) {
    if (file.extension !== "md")
      return;
    const noteTitle = file.basename;
    const notePath = file.path;
    this.addToIndex(noteTitle, {
      type: "title",
      notePath,
      noteTitle,
      target: noteTitle,
      displayText: noteTitle
    });
    const metadata = this.metadataCache.getFileCache(file);
    if (metadata?.frontmatter?.tags) {
      const tags = Array.isArray(metadata.frontmatter.tags) ? metadata.frontmatter.tags : metadata.frontmatter.tags.split(",").map((t) => t.trim());
      tags.forEach((tag) => {
        this.addToIndex(tag, {
          type: "tag",
          notePath,
          noteTitle,
          target: tag,
          displayText: `#${tag}`
        });
      });
    }
    if (metadata?.headings) {
      metadata.headings.forEach((heading) => {
        this.addToIndex(heading.heading, {
          type: "heading",
          notePath,
          noteTitle,
          target: heading.heading,
          displayText: `${noteTitle} > ${heading.heading}`
        });
      });
    }
    if (metadata?.sections) {
      metadata.sections.forEach((section) => {
        if (section.id) {
          this.addToIndex(section.id, {
            type: "block",
            notePath,
            noteTitle,
            target: section.id,
            displayText: `${noteTitle} > #${section.id}`
          });
        }
      });
    }
  }
  addToIndex(key, entry) {
    const normalizedKey = this.normalizeText(key);
    const entries = this.index.get(normalizedKey) || [];
    if (!entries.some((e) => e.type === entry.type && e.notePath === entry.notePath && e.target === entry.target)) {
      entries.push(entry);
    }
    this.index.set(normalizedKey, entries);
  }
  debouncedIndexUpdate(file) {
    if (this.debounceTimeout)
      clearTimeout(this.debounceTimeout);
    this.debounceTimeout = window.setTimeout(() => {
      this.deleteFromIndex(file);
      this.indexFile(file);
    }, 300);
  }
  getSuggestions(query) {
    const normalizedQuery = this.normalizeText(query);
    if (!normalizedQuery)
      return [];
    const exactMatches = [];
    for (const [key, entries] of this.index.entries()) {
      if (key.startsWith(normalizedQuery)) {
        exactMatches.push(...entries.map((e) => ({ ...e, score: 0 })));
      }
    }
    const fuzzyMatches = [];
    for (const [key, entries] of this.index.entries()) {
      if (fuzzyMatch(normalizedQuery, key)) {
        fuzzyMatches.push(...entries.map((e) => ({ ...e, score: 0.5 })));
      }
    }
    const allMatches = [...exactMatches, ...fuzzyMatches];
    const uniqueMatches = allMatches.filter(
      (match, index, self) => index === self.findIndex(
        (m) => m.type === match.type && m.notePath === match.notePath && m.target === match.target
      )
    );
    return uniqueMatches.slice(0, 100);
  }
};
var PhraseSyncSuggest = class extends import_obsidian.EditorSuggest {
  constructor(plugin) {
    super(plugin.app);
    this.plugin = plugin;
  }
  onTrigger(cursor, editor) {
    const line = editor.getLine(cursor.line);
    if (!line)
      return null;
    const dateMatch = line.match(/\b\d{4}-\d{2}-\d{2}\b/);
    if (dateMatch) {
      const [date] = dateMatch;
      return {
        start: { line: cursor.line, ch: line.indexOf(date) },
        end: { line: cursor.line, ch: line.indexOf(date) + date.length },
        query: date
      };
    }
    const sentenceEndRegex = /[.!?]/g;
    let sentenceStart = 0;
    let sentenceEnd = line.length;
    for (let i = cursor.ch - 1; i >= 0; i--) {
      if (/[.!?]/.test(line[i])) {
        sentenceStart = i + 1;
        break;
      }
    }
    for (let i = cursor.ch; i < line.length; i++) {
      if (/[.!?]/.test(line[i])) {
        sentenceEnd = i;
        break;
      }
    }
    while (sentenceStart < sentenceEnd && /\s/.test(line[sentenceStart]))
      sentenceStart++;
    while (sentenceEnd > sentenceStart && /\s/.test(line[sentenceEnd - 1]))
      sentenceEnd--;
    const sentence = line.substring(sentenceStart, sentenceEnd);
    const sentenceOffset = sentenceStart;
    const wordsWithIndices = [];
    let wordRegex = /\b\w[\w\p{L}\p{N}'-]*\b/gu;
    let match;
    while ((match = wordRegex.exec(sentence)) !== null) {
      wordsWithIndices.push({ word: match[0], start: match.index, end: match.index + match[0].length });
    }
    let cursorInSentence = cursor.ch - sentenceOffset;
    let cursorWordIdx = wordsWithIndices.findIndex((w) => cursorInSentence >= w.start && cursorInSentence <= w.end);
    if (cursorWordIdx === -1)
      cursorWordIdx = wordsWithIndices.findIndex((w) => cursorInSentence === w.end);
    if (cursorWordIdx === -1)
      return null;
    for (let span = wordsWithIndices.length; span >= 1; span--) {
      for (let offset = 0; offset <= wordsWithIndices.length - span; offset++) {
        const startIdx = offset;
        const endIdx = startIdx + span - 1;
        const phraseStart = wordsWithIndices[startIdx].start;
        const phraseEnd = wordsWithIndices[endIdx].end;
        if (cursorWordIdx < startIdx || cursorWordIdx > endIdx)
          continue;
        const phrase = sentence.substring(phraseStart, phraseEnd);
        if (this.plugin.getSuggestions(phrase).length > 0) {
          return {
            start: { line: cursor.line, ch: sentenceOffset + phraseStart },
            end: { line: cursor.line, ch: sentenceOffset + phraseEnd },
            query: phrase
          };
        }
      }
    }
    let start = cursor.ch;
    while (start > 0 && !/[\s\p{P}]/u.test(line.charAt(start - 1)))
      start--;
    let end = cursor.ch;
    while (end < line.length && !/[\s\p{P}]/u.test(line.charAt(end)))
      end++;
    const query = line.substring(start, end);
    return query ? { start: { line: cursor.line, ch: start }, end: { line: cursor.line, ch: end }, query } : null;
  }
  async getSuggestions(context) {
    return this.plugin.getSuggestions(context.query);
  }
  renderSuggestion(item, el) {
    const container = el.createDiv({ cls: "smart-autolinker-suggestion" });
    const iconMap = {
      title: "file-text",
      heading: "heading",
      block: "link",
      tag: "tag"
    };
    const icon = container.createDiv({ cls: "smart-autolinker-icon" });
    (0, import_obsidian.setIcon)(icon, iconMap[item.type]);
    const textEl = container.createDiv({ cls: "smart-autolinker-text" });
    textEl.createEl("strong", { text: item.displayText });
    container.createEl("small", {
      text: `${item.type === "tag" ? "Tag" : item.type} in ${item.noteTitle}`,
      cls: "smart-autolinker-subtext"
    });
  }
  selectSuggestion(item) {
    if (!this.context)
      return;
    const { editor, start, end, query } = this.context;
    let linkText = "";
    switch (item.type) {
      case "title":
        linkText = `[[${item.target}|${query}]]`;
        break;
      case "heading":
        linkText = `[[${item.noteTitle}#${item.target}|${query}]]`;
        break;
      case "block":
        linkText = `[[${item.noteTitle}#^${item.target}|${query}]]`;
        break;
      case "tag":
        linkText = `[[${item.target}|${query}]]`;
        break;
    }
    editor.replaceRange(linkText, start, end);
    this.close();
  }
};
//# sourceMappingURL=main.js.map

/* nosourcemap */