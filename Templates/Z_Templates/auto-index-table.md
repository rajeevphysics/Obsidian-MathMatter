

<%*
/** ========== Helper: pick nested folder ========== */
async function pickNestedFolder() {
  let current = "";
  while (true) {
    const msg = current
      ? `Current: ${current}\nAdd next subfolder (leave blank to finish):`
      : "Enter top-level folder (leave blank to cancel):";

    let seg = await tp.system.prompt(msg);
    if (!seg) break;
    seg = seg.trim().replace(/^\/+|\/+$/g, "");
    if (!seg) break;

    const candidate = current ? `${current}/${seg}` : seg;
    const af = app.vault.getAbstractFileByPath(candidate);
    if (af && typeof af === "object" && "children" in af) {
      current = candidate;
    } else {
      new Notice(`Folder not found: ${candidate}`);
    }
  }
  return current;
}

/** ========== Helper: get existing list text (selection or prompt) ========== */
async function getExistingListTextNormalized() {
  const sel = tp.file.selection();
  if (sel && sel.trim().length) {
    return sel;
  }
  let pasted = await tp.system.prompt(
    "Paste your existing list (format:\n- [[NoteName]]\n  - description\nLeave blank if none):"
  );
  pasted = (pasted ?? "").trim();
  if (!pasted) return "";

  // Normalize from flattened paste to multi-line
  let norm = pasted;
  norm = norm.replace(/\s*-\s*\[\[/g, "\n- [[");
  norm = norm.replace(/^\s*\n/, "");
  norm = norm.replace(/\s{2}-\s(?!\[\[)/g, "\n  - ");
  return norm;
}

/** ========== Helper: parse existing list into {name: sub-bullet text} ========== */
function parseNoteDescriptions(markdown) {
  const map = {};
  if (!markdown) return map;

  const lines = markdown.split("\n");
  let currentNote = null;
  for (let line of lines) {
    const noteMatch = line.match(/^\s*-\s*\[\[([^\]\|]+)(?:\|[^\]]*)?\]\]/);
    if (noteMatch) {
      currentNote = noteMatch[1].trim();
      if (!(currentNote in map)) map[currentNote] = "";
    } else if (currentNote && line.trim().startsWith("-")) {
      // sub-bullet line
      const subText = line.replace(/^\s*-\s*/, "");
      map[currentNote] = subText;
      currentNote = null; // reset until next note
    }
  }
  return map;
}

/** ========== MAIN ========== */
const root = await pickNestedFolder();
if (!root) {
  tR += "> No folder selected.\n";
  return;
}

const existingListText = await getExistingListTextNormalized();
const descMap = parseNoteDescriptions(existingListText);

// All files under folder (nested), sorted by basename
const files = app.vault.getMarkdownFiles()
  .filter(f => f.path.startsWith(root + "/"))
  .sort((a, b) => a.basename.localeCompare(b.basename, undefined, {sensitivity:"base"}));

let out = "";
for (const f of files) {
  const name = f.basename;
  const desc = (name in descMap) ? descMap[name] : "";
  out += `- [[${name}]]\n  - ${desc}\n`;
}

if (!out.trim()) {
  out = "> (No notes found to list.)\n";
}

tR += out;
%>