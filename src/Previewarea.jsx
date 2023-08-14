/* Should contain parsed markdown */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons"

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
	  <h1 className="toolbar-text creator">Made with by <FontAwesomeIcon icon={faHeart} className="heart" /> Yves </h1>
      </div>
    </div>
  );
}
