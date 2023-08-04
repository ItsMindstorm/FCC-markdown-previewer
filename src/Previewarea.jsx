/* Should contain parsed markdown */

export function PreviewArea({ markedParse }) {
  return (
    <div className="container">
      <div className="row">
        <h1 className="toolbar-text">Markdown output</h1>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: markedParse }}
        ></div>
      </div>

      <div>
        <hr />
      </div>
    </div>
  );
}
