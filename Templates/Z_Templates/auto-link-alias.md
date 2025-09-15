<%*
const editor = app.workspace.activeLeaf.view.sourceMode.cmEditor;
const cursor = editor.getCursor();
const lineText = editor.getLine(cursor.line);

const match = lineText.match(/\[\[([^\|\]]+)\]\]$/);

if (match) {
  const linkText = match[1];
  const linkStart = lineText.lastIndexOf('[[');
  const linkEnd = linkStart + match[0].length;
  const newText = `[[${linkText}|]]`;

  editor.replaceRange(newText, { line: cursor.line, ch: linkStart }, { line: cursor.line, ch: linkEnd });

  const pipePos = linkStart + newText.indexOf('|') + 1;

  setTimeout(() => {
    editor.setCursor({ line: cursor.line, ch: pipePos });
  }, 50);
}
%>
