import { marked } from "marked";
import { mangle } from "marked-mangle";
import { gfmHeadingId } from "marked-gfm-heading-id";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";

export function InputArea({ inputText, setInputText, markedParse }) {
  // Stuff to prevent errors
  marked.use(mangle());
  marked.use(gfmHeadingId());
  marked.setOptions({
    gfm: true,
    breaks: true,
  });

  const handleInputText = (e) => {
    setInputText(e.target.value);

    console.log(markedParse);
  };

  useEffect(() => {
    console.log(markedParse);
  }, []);

  return (
    <div className="toolbar container">
      <div className="row">
        <div className="toolbar">
          <h1>
            <FontAwesomeIcon icon={faFreeCodeCamp} className="icon" />
            Markdown input
          </h1>
        </div>
        <textarea
          id="editor"
          itemType="text"
          className="col-md-10"
          defaultValue={inputText}
          autoFocus
          onChange={handleInputText}
        ></textarea>
      </div>
      <div>
        <hr />
      </div>
    </div>
  );
}
