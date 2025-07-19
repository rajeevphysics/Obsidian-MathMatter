<%*
const editor = app.workspace.activeLeaf.view.sourceMode.cmEditor;
const content = editor.getValue();
const words = content.match(/\b\w+\b/g)?.length || 0;
const minutes = Math.max(1, Math.round(words / 200)); // Minimum 1 min

const readTimeBlock = `>[!info]+ Read Time\n**⏱ ${minutes} min${minutes > 1 ? "s" : ""}**\n`;

editor.replaceRange(readTimeBlock, editor.getCursor());
%>
