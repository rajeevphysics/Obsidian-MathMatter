'use strict';

var obsidian = require('obsidian');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var Formatter = /** @class */ (function () {
    function Formatter() {
    }
    return Formatter;
}());
/**
 * {@link DecimalUnitFormatter} provides an implementation of {@link Formatter}
 * that outputs a integers in a standard decimal format with grouped thousands.
 */
var DecimalUnitFormatter = /** @class */ (function (_super) {
    __extends(DecimalUnitFormatter, _super);
    /**
     * @param unit the unit of the value being formatted.
     * @constructor
     */
    function DecimalUnitFormatter(unit) {
        var _this = _super.call(this) || this;
        _this.unit = unit;
        _this.numberFormat = Intl.NumberFormat('en-US', { style: 'decimal' });
        return _this;
    }
    DecimalUnitFormatter.prototype.format = function (value) {
        return "".concat(this.numberFormat.format(value), " ").concat(this.unit);
    };
    return DecimalUnitFormatter;
}(Formatter));
/**
 * {@link ScalingUnitFormatter}
 */
var ScalingUnitFormatter = /** @class */ (function (_super) {
    __extends(ScalingUnitFormatter, _super);
    /**
     * @param numberFormat An instance of {@link Intl.NumberFormat} to use to
     * format the scaled value.
     */
    function ScalingUnitFormatter(numberFormat) {
        var _this = _super.call(this) || this;
        _this.numberFormat = numberFormat;
        return _this;
    }
    ScalingUnitFormatter.prototype.format = function (value) {
        var _a = this.scale(value), scaledValue = _a[0], scaledUnit = _a[1];
        return "".concat(this.numberFormat.format(scaledValue), " ").concat(scaledUnit);
    };
    return ScalingUnitFormatter;
}(Formatter));
/**
 * {@link BytesFormatter} formats values that represent a size in bytes as a
 * value in bytes, kilobytes, megabytes, gigabytes, etc.
 */
var BytesFormatter = /** @class */ (function (_super) {
    __extends(BytesFormatter, _super);
    function BytesFormatter() {
        return _super.call(this, Intl.NumberFormat('en-US', {
            style: 'decimal',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })) || this;
    }
    BytesFormatter.prototype.scale = function (value) {
        var units = ["bytes", "KB", "MB", "GB", "TB", "PB"];
        while (value > 1024 && units.length > 0) {
            value = value / 1024;
            units.shift();
        }
        return [value, units[0]];
    };
    return BytesFormatter;
}(ScalingUnitFormatter));

var VaultMetrics = /** @class */ (function (_super) {
    __extends(VaultMetrics, _super);
    function VaultMetrics() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.files = 0;
        _this.notes = 0;
        _this.attachments = 0;
        _this.size = 0;
        _this.links = 0;
        _this.words = 0;
        return _this;
    }
    VaultMetrics.prototype.reset = function () {
        this.files = 0;
        this.notes = 0;
        this.attachments = 0;
        this.size = 0;
        this.links = 0;
        this.words = 0;
    };
    VaultMetrics.prototype.dec = function (metrics) {
        this.files -= (metrics === null || metrics === void 0 ? void 0 : metrics.files) || 0;
        this.notes -= (metrics === null || metrics === void 0 ? void 0 : metrics.notes) || 0;
        this.attachments -= (metrics === null || metrics === void 0 ? void 0 : metrics.attachments) || 0;
        this.size -= (metrics === null || metrics === void 0 ? void 0 : metrics.size) || 0;
        this.links -= (metrics === null || metrics === void 0 ? void 0 : metrics.links) || 0;
        this.words -= (metrics === null || metrics === void 0 ? void 0 : metrics.words) || 0;
        this.trigger("updated");
    };
    VaultMetrics.prototype.inc = function (metrics) {
        this.files += (metrics === null || metrics === void 0 ? void 0 : metrics.files) || 0;
        this.notes += (metrics === null || metrics === void 0 ? void 0 : metrics.notes) || 0;
        this.attachments += (metrics === null || metrics === void 0 ? void 0 : metrics.attachments) || 0;
        this.size += (metrics === null || metrics === void 0 ? void 0 : metrics.size) || 0;
        this.links += (metrics === null || metrics === void 0 ? void 0 : metrics.links) || 0;
        this.words += (metrics === null || metrics === void 0 ? void 0 : metrics.words) || 0;
        this.trigger("updated");
    };
    VaultMetrics.prototype.on = function (name, callback, ctx) {
        return _super.prototype.on.call(this, "updated", callback, ctx);
    };
    return VaultMetrics;
}(obsidian.Events));

/**
 * The {@link UnitTokenizer} is a constant tokenizer that always returns an
 * empty list.
 */
var UnitTokenizer = /** @class */ (function () {
    function UnitTokenizer() {
    }
    UnitTokenizer.prototype.tokenize = function (_) {
        return [];
    };
    return UnitTokenizer;
}());
/**
 * {@link MarkdownTokenizer} understands how to tokenize markdown text into word
 * tokens.
 */
var MarkdownTokenizer = /** @class */ (function () {
    function MarkdownTokenizer() {
    }
    MarkdownTokenizer.prototype.isNonWord = function (token) {
        var NON_WORDS = /^\W+$/;
        return !!NON_WORDS.exec(token);
    };
    MarkdownTokenizer.prototype.isNumber = function (token) {
        var NUMBER = /^\d+(\.\d+)?$/;
        return !!NUMBER.exec(token);
    };
    MarkdownTokenizer.prototype.isCodeBlockHeader = function (token) {
        var CODE_BLOCK_HEADER = /^```\w+$/;
        return !!CODE_BLOCK_HEADER.exec(token);
    };
    MarkdownTokenizer.prototype.stripHighlights = function (token) {
        var STRIP_HIGHLIGHTS = /^(==)?(.*?)(==)?$/;
        return STRIP_HIGHLIGHTS.exec(token)[2];
    };
    MarkdownTokenizer.prototype.stripFormatting = function (token) {
        var STRIP_FORMATTING = /^(_+|\*+)?(.*?)(_+|\*+)?$/;
        return STRIP_FORMATTING.exec(token)[2];
    };
    MarkdownTokenizer.prototype.stripPunctuation = function (token) {
        var STRIP_PUNCTUATION = /^(`|\.|:|"|,|!|\?)?(.*?)(`|\.|:|"|,|!|\?)?$/;
        return STRIP_PUNCTUATION.exec(token)[2];
    };
    MarkdownTokenizer.prototype.stripWikiLinks = function (token) {
        var STRIP_WIKI_LINKS = /^(\[\[)?(.*?)(\]\])?$/;
        return STRIP_WIKI_LINKS.exec(token)[2];
    };
    MarkdownTokenizer.prototype.stripAll = function (token) {
        if (token === "") {
            return token;
        }
        var isFixedPoint = false;
        while (!isFixedPoint) {
            var prev = token;
            token = [token].
                map(this.stripHighlights).
                map(this.stripFormatting).
                map(this.stripPunctuation).
                map(this.stripWikiLinks)[0];
            isFixedPoint = isFixedPoint || prev === token;
        }
        return token;
    };
    MarkdownTokenizer.prototype.tokenize = function (content) {
        var _this = this;
        if (content.trim() === "") {
            return [];
        }
        else {
            var WORD_BOUNDARY = /[ \n\r\t\"\|,\(\)\[\]/]+/;
            var words = content.
                split(WORD_BOUNDARY).
                filter(function (token) { return !_this.isNonWord(token); }).
                filter(function (token) { return !_this.isNumber(token); }).
                filter(function (token) { return !_this.isCodeBlockHeader(token); }).
                map(function (token) { return _this.stripAll(token); }).
                filter(function (token) { return token.length > 0; });
            return words;
        }
    };
    return MarkdownTokenizer;
}());
var UNIT_TOKENIZER = new UnitTokenizer();
var MARKDOWN_TOKENIZER = new MarkdownTokenizer();

var FileType;
(function (FileType) {
    FileType[FileType["Unknown"] = 0] = "Unknown";
    FileType[FileType["Note"] = 1] = "Note";
    FileType[FileType["Attachment"] = 2] = "Attachment";
})(FileType || (FileType = {}));
var VaultMetricsCollector = /** @class */ (function () {
    function VaultMetricsCollector(owner) {
        this.data = new Map();
        this.backlog = new Array();
        this.vaultMetrics = new VaultMetrics();
        this.owner = owner;
    }
    VaultMetricsCollector.prototype.setVault = function (vault) {
        this.vault = vault;
        return this;
    };
    VaultMetricsCollector.prototype.setMetadataCache = function (metadataCache) {
        this.metadataCache = metadataCache;
        return this;
    };
    VaultMetricsCollector.prototype.setVaultMetrics = function (vaultMetrics) {
        this.vaultMetrics = vaultMetrics;
        return this;
    };
    VaultMetricsCollector.prototype.start = function () {
        var _this = this;
        var _a;
        this.owner.registerEvent(this.vault.on("create", function (file) { _this.onfilecreated(file); }));
        this.owner.registerEvent(this.vault.on("modify", function (file) { _this.onfilemodified(file); }));
        this.owner.registerEvent(this.vault.on("delete", function (file) { _this.onfiledeleted(file); }));
        this.owner.registerEvent(this.vault.on("rename", function (file, oldPath) { _this.onfilerenamed(file, oldPath); }));
        this.owner.registerEvent(this.metadataCache.on("resolve", function (file) { _this.onfilemodified(file); }));
        this.owner.registerEvent(this.metadataCache.on("changed", function (file) { _this.onfilemodified(file); }));
        this.data.clear();
        this.backlog = new Array();
        (_a = this.vaultMetrics) === null || _a === void 0 ? void 0 : _a.reset();
        this.vault.getFiles().forEach(function (file) {
            if (!(file instanceof obsidian.TFolder)) {
                _this.push(file);
            }
        });
        this.owner.registerInterval(+setInterval(function () { _this.processBacklog(); }, 2000));
        return this;
    };
    VaultMetricsCollector.prototype.push = function (fileOrPath) {
        if (fileOrPath instanceof obsidian.TFolder) {
            return;
        }
        var path = (fileOrPath instanceof obsidian.TFile) ? fileOrPath.path : fileOrPath;
        if (!this.backlog.contains(path)) {
            this.backlog.push(path);
        }
    };
    VaultMetricsCollector.prototype.processBacklog = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, file, metrics;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.backlog.length > 0)) return [3 /*break*/, 2];
                        path = this.backlog.shift();
                        file = this.vault.getAbstractFileByPath(path);
                        return [4 /*yield*/, this.collect(file)];
                    case 1:
                        metrics = _a.sent();
                        this.update(path, metrics);
                        return [3 /*break*/, 0];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    VaultMetricsCollector.prototype.onfilecreated = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // console.log(`onfilecreated(${file?.path})`);
                this.push(file);
                return [2 /*return*/];
            });
        });
    };
    VaultMetricsCollector.prototype.onfilemodified = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // console.log(`onfilemodified(${file?.path})`)
                this.push(file);
                return [2 /*return*/];
            });
        });
    };
    VaultMetricsCollector.prototype.onfiledeleted = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // console.log(`onfiledeleted(${file?.path})`)
                this.push(file);
                return [2 /*return*/];
            });
        });
    };
    VaultMetricsCollector.prototype.onfilerenamed = function (file, oldPath) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // console.log(`onfilerenamed(${file?.path})`)
                this.push(file);
                this.push(oldPath);
                return [2 /*return*/];
            });
        });
    };
    VaultMetricsCollector.prototype.getFileType = function (file) {
        var _a;
        if (((_a = file.extension) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === "md") {
            return FileType.Note;
        }
        else {
            return FileType.Attachment;
        }
    };
    VaultMetricsCollector.prototype.collect = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var metadata;
            return __generator(this, function (_a) {
                try {
                    metadata = this.metadataCache.getFileCache(file);
                }
                catch (e) {
                    // getFileCache indicates that it should return either an instance
                    // of CachedMetadata or null.  The conditions under which a null 
                    // is returned are unspecified.  Empirically, if the file does not
                    // exist, e.g. it's been deleted or renamed then getFileCache will 
                    // throw an exception instead of returning null.
                    metadata = null;
                }
                if (metadata == null) {
                    return [2 /*return*/, Promise.resolve(null)];
                }
                switch (this.getFileType(file)) {
                    case FileType.Note:
                        return [2 /*return*/, new NoteMetricsCollector(this.vault).collect(file, metadata)];
                    case FileType.Attachment:
                        return [2 /*return*/, new FileMetricsCollector().collect(file, metadata)];
                }
                return [2 /*return*/];
            });
        });
    };
    VaultMetricsCollector.prototype.update = function (fileOrPath, metrics) {
        var _a, _b;
        var key = (fileOrPath instanceof obsidian.TFile) ? fileOrPath.path : fileOrPath;
        // Remove the existing values for the passed file if present, update the
        // raw values, then add the values for the passed file to the totals.
        (_a = this.vaultMetrics) === null || _a === void 0 ? void 0 : _a.dec(this.data.get(key));
        if (metrics == null) {
            this.data.delete(key);
        }
        else {
            this.data.set(key, metrics);
        }
        (_b = this.vaultMetrics) === null || _b === void 0 ? void 0 : _b.inc(metrics);
    };
    return VaultMetricsCollector;
}());
var NoteMetricsCollector = /** @class */ (function () {
    function NoteMetricsCollector(vault) {
        this.vault = vault;
    }
    NoteMetricsCollector.prototype.collect = function (file, metadata) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var metrics, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        metrics = new VaultMetrics();
                        metrics.files = 1;
                        metrics.notes = 1;
                        metrics.attachments = 0;
                        metrics.size = (_a = file.stat) === null || _a === void 0 ? void 0 : _a.size;
                        metrics.links = ((_b = metadata === null || metadata === void 0 ? void 0 : metadata.links) === null || _b === void 0 ? void 0 : _b.length) || 0;
                        metrics.words = 0;
                        _c = metrics;
                        return [4 /*yield*/, this.vault.cachedRead(file).then(function (content) {
                                var _a;
                                return (_a = metadata.sections) === null || _a === void 0 ? void 0 : _a.map(function (section) {
                                    var _a, _b, _c, _d;
                                    var sectionType = section.type;
                                    var startOffset = (_b = (_a = section.position) === null || _a === void 0 ? void 0 : _a.start) === null || _b === void 0 ? void 0 : _b.offset;
                                    var endOffset = (_d = (_c = section.position) === null || _c === void 0 ? void 0 : _c.end) === null || _d === void 0 ? void 0 : _d.offset;
                                    var tokenizer = NoteMetricsCollector.TOKENIZERS.get(sectionType);
                                    if (!tokenizer) {
                                        console.log("".concat(file.path, ": no tokenizer, section.type=").concat(section.type));
                                        return 0;
                                    }
                                    else {
                                        var tokens = tokenizer.tokenize(content.substring(startOffset, endOffset));
                                        return tokens.length;
                                    }
                                }).reduce(function (a, b) { return a + b; }, 0);
                            }).catch(function (e) {
                                console.log("".concat(file.path, " ").concat(e));
                                return 0;
                            })];
                    case 1:
                        _c.words = _d.sent();
                        return [2 /*return*/, metrics];
                }
            });
        });
    };
    NoteMetricsCollector.TOKENIZERS = new Map([
        ["paragraph", MARKDOWN_TOKENIZER],
        ["heading", MARKDOWN_TOKENIZER],
        ["list", MARKDOWN_TOKENIZER],
        ["table", UNIT_TOKENIZER],
        ["yaml", UNIT_TOKENIZER],
        ["code", UNIT_TOKENIZER],
        ["blockquote", MARKDOWN_TOKENIZER],
        ["math", UNIT_TOKENIZER],
        ["thematicBreak", UNIT_TOKENIZER],
        ["html", UNIT_TOKENIZER],
        ["text", UNIT_TOKENIZER],
        ["element", UNIT_TOKENIZER],
        ["footnoteDefinition", UNIT_TOKENIZER],
        ["definition", UNIT_TOKENIZER],
        ["callout", MARKDOWN_TOKENIZER],
    ]);
    return NoteMetricsCollector;
}());
var FileMetricsCollector = /** @class */ (function () {
    function FileMetricsCollector() {
    }
    FileMetricsCollector.prototype.collect = function (file, metadata) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var metrics;
            return __generator(this, function (_b) {
                metrics = new VaultMetrics();
                metrics.files = 1;
                metrics.notes = 0;
                metrics.attachments = 1;
                metrics.size = (_a = file.stat) === null || _a === void 0 ? void 0 : _a.size;
                metrics.links = 0;
                metrics.words = 0;
                return [2 /*return*/, metrics];
            });
        });
    };
    return FileMetricsCollector;
}());

var StatisticsPluginSettingTab = /** @class */ (function (_super) {
    __extends(StatisticsPluginSettingTab, _super);
    function StatisticsPluginSettingTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.plugin = plugin;
        return _this;
    }
    StatisticsPluginSettingTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        containerEl.empty();
        new obsidian.Setting(containerEl)
            .setName("Show individual items")
            .setDesc("Whether to show multiple items at once or cycle them with a click")
            .addToggle(function (value) {
            value
                .setValue(_this.plugin.settings.displayIndividualItems)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.plugin.settings.displayIndividualItems = value;
                            this.display();
                            return [4 /*yield*/, this.plugin.saveSettings()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        if (!this.plugin.settings.displayIndividualItems) {
            return;
        }
        new obsidian.Setting(containerEl)
            .setName("Show notes")
            .addToggle(function (value) {
            value
                .setValue(_this.plugin.settings.showNotes)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.plugin.settings.showNotes = value;
                            return [4 /*yield*/, this.plugin.saveSettings()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        new obsidian.Setting(containerEl)
            .setName("Show attachments")
            .addToggle(function (value) {
            value
                .setValue(_this.plugin.settings.showAttachments)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.plugin.settings.showAttachments = value;
                            return [4 /*yield*/, this.plugin.saveSettings()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        new obsidian.Setting(containerEl)
            .setName("Show files")
            .addToggle(function (value) {
            value
                .setValue(_this.plugin.settings.showFiles)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.plugin.settings.showFiles = value;
                            return [4 /*yield*/, this.plugin.saveSettings()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        new obsidian.Setting(containerEl)
            .setName("Show links")
            .addToggle(function (value) {
            value
                .setValue(_this.plugin.settings.showLinks)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.plugin.settings.showLinks = value;
                            return [4 /*yield*/, this.plugin.saveSettings()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        new obsidian.Setting(containerEl)
            .setName("Show words")
            .addToggle(function (value) {
            value
                .setValue(_this.plugin.settings.showWords)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.plugin.settings.showWords = value;
                            return [4 /*yield*/, this.plugin.saveSettings()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        new obsidian.Setting(containerEl)
            .setName("Show size")
            .addToggle(function (value) {
            value
                .setValue(_this.plugin.settings.showSize)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.plugin.settings.showSize = value;
                            return [4 /*yield*/, this.plugin.saveSettings()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    return StatisticsPluginSettingTab;
}(obsidian.PluginSettingTab));

var DEFAULT_SETTINGS = {
    displayIndividualItems: false,
    showNotes: false,
    showAttachments: false,
    showFiles: false,
    showLinks: false,
    showWords: false,
    showSize: false,
};
var StatisticsPlugin = /** @class */ (function (_super) {
    __extends(StatisticsPlugin, _super);
    function StatisticsPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.statusBarItem = null;
        return _this;
    }
    StatisticsPlugin.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Loading vault-statistics Plugin');
                        return [4 /*yield*/, this.loadSettings()];
                    case 1:
                        _a.sent();
                        this.vaultMetrics = new VaultMetrics();
                        this.vaultMetricsCollector = new VaultMetricsCollector(this).
                            setVault(this.app.vault).
                            setMetadataCache(this.app.metadataCache).
                            setVaultMetrics(this.vaultMetrics).
                            start();
                        this.statusBarItem = new StatisticsStatusBarItem(this, this.addStatusBarItem()).
                            setVaultMetrics(this.vaultMetrics);
                        this.addSettingTab(new StatisticsPluginSettingTab(this.app, this));
                        return [2 /*return*/];
                }
            });
        });
    };
    StatisticsPlugin.prototype.loadSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this;
                        _c = (_b = Object).assign;
                        _d = [{}, DEFAULT_SETTINGS];
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.settings = _c.apply(_b, _d.concat([_e.sent()]));
                        return [2 /*return*/];
                }
            });
        });
    };
    StatisticsPlugin.prototype.saveSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveData(this.settings)];
                    case 1:
                        _a.sent();
                        this.statusBarItem.refresh();
                        return [2 /*return*/];
                }
            });
        });
    };
    return StatisticsPlugin;
}(obsidian.Plugin));
/**
 * {@link StatisticView} is responsible for maintaining the DOM representation
 * of a given statistic.
 */
var StatisticView = /** @class */ (function () {
    /**
     * Constructor.
     *
     * @param containerEl The parent element for the view.
     */
    function StatisticView(containerEl) {
        this.containerEl = containerEl.createSpan({ cls: ["obsidian-vault-statistics--item"] });
        this.setActive(false);
    }
    /**
     * Sets the name of the statistic.
     */
    StatisticView.prototype.setStatisticName = function (name) {
        this.containerEl.addClass("obsidian-vault-statistics--item-".concat(name));
        return this;
    };
    /**
     * Sets the formatter to use to produce the content of the view.
     */
    StatisticView.prototype.setFormatter = function (formatter) {
        this.formatter = formatter;
        return this;
    };
    /**
     * Updates the view with the desired active status.
     *
     * Active views have the CSS class `obsidian-vault-statistics--item-active`
     * applied, inactive views have the CSS class
     * `obsidian-vault-statistics--item-inactive` applied. These classes are
     * mutually exclusive.
     */
    StatisticView.prototype.setActive = function (isActive) {
        this.containerEl.removeClass("obsidian-vault-statistics--item--active");
        this.containerEl.removeClass("obsidian-vault-statistics--item--inactive");
        if (isActive) {
            this.containerEl.addClass("obsidian-vault-statistics--item--active");
        }
        else {
            this.containerEl.addClass("obsidian-vault-statistics--item--inactive");
        }
        return this;
    };
    /**
     * Refreshes the content of the view with content from the passed {@link
     * Statistics}.
     */
    StatisticView.prototype.refresh = function (s) {
        this.containerEl.setText(this.formatter(s));
    };
    /**
     * Returns the text content of the view.
     */
    StatisticView.prototype.getText = function () {
        return this.containerEl.getText();
    };
    return StatisticView;
}());
var StatisticsStatusBarItem = /** @class */ (function () {
    function StatisticsStatusBarItem(owner, statusBarItem) {
        var _this = this;
        // index of the currently displayed stat.
        this.displayedStatisticIndex = 0;
        this.statisticViews = [];
        this.refreshSoon = obsidian.debounce(function () { _this.refresh(); }, 2000, false);
        this.owner = owner;
        this.statusBarItem = statusBarItem;
        this.statisticViews.push(new StatisticView(this.statusBarItem).
            setStatisticName("notes").
            setFormatter(function (s) { return new DecimalUnitFormatter("notes").format(s.notes); }));
        this.statisticViews.push(new StatisticView(this.statusBarItem).
            setStatisticName("attachments").
            setFormatter(function (s) { return new DecimalUnitFormatter("attachments").format(s.attachments); }));
        this.statisticViews.push(new StatisticView(this.statusBarItem).
            setStatisticName("files").
            setFormatter(function (s) { return new DecimalUnitFormatter("files").format(s.files); }));
        this.statisticViews.push(new StatisticView(this.statusBarItem).
            setStatisticName("links").
            setFormatter(function (s) { return new DecimalUnitFormatter("links").format(s.links); }));
        this.statisticViews.push(new StatisticView(this.statusBarItem).
            setStatisticName("words").
            setFormatter(function (s) { return new DecimalUnitFormatter("words").format(s.words); }));
        this.statisticViews.push(new StatisticView(this.statusBarItem).
            setStatisticName("size").
            setFormatter(function (s) { return new BytesFormatter().format(s.size); }));
        this.statusBarItem.onClickEvent(function () { _this.onclick(); });
    }
    StatisticsStatusBarItem.prototype.setVaultMetrics = function (vaultMetrics) {
        var _a;
        this.vaultMetrics = vaultMetrics;
        this.owner.registerEvent((_a = this.vaultMetrics) === null || _a === void 0 ? void 0 : _a.on("updated", this.refreshSoon));
        this.refreshSoon();
        return this;
    };
    StatisticsStatusBarItem.prototype.refresh = function () {
        var _this = this;
        if (this.owner.settings.displayIndividualItems) {
            this.statisticViews[0].setActive(this.owner.settings.showNotes).refresh(this.vaultMetrics);
            this.statisticViews[1].setActive(this.owner.settings.showAttachments).refresh(this.vaultMetrics);
            this.statisticViews[2].setActive(this.owner.settings.showFiles).refresh(this.vaultMetrics);
            this.statisticViews[3].setActive(this.owner.settings.showLinks).refresh(this.vaultMetrics);
            this.statisticViews[4].setActive(this.owner.settings.showWords).refresh(this.vaultMetrics);
            this.statisticViews[5].setActive(this.owner.settings.showSize).refresh(this.vaultMetrics);
        }
        else {
            this.statisticViews.forEach(function (view, i) {
                view.setActive(_this.displayedStatisticIndex == i).refresh(_this.vaultMetrics);
            });
        }
        this.statusBarItem.title = this.statisticViews.map(function (view) { return view.getText(); }).join("\n");
    };
    StatisticsStatusBarItem.prototype.onclick = function () {
        if (!this.owner.settings.displayIndividualItems) {
            this.displayedStatisticIndex = (this.displayedStatisticIndex + 1) % this.statisticViews.length;
        }
        this.refresh();
    };
    return StatisticsStatusBarItem;
}());

module.exports = StatisticsPlugin;


/* nosourcemap */