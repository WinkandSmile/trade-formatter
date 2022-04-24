import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Trade from './Trade'


export default function Copy() {
    const [text, setText] = useState("");
    const [isCopied, setIsCopied] = useState(false);
  
    const onCopyText = () => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    };
  
    return (
        <Trade classname={trade} />
      <div className="container">
        <input
          type="text"
          value={text}
          placeholder="Type some text here"
          onChange={(event) => setText(event.target.value)}
        />
        <CopyToClipboard text={text} onCopy={onCopyText}>
          <div className="copy-area">
            <button>Copy to Clipboard</button>
            <span className={`copy-feedback ${isCopied ? "active" : ""}`}>
              Copied!
            </span>
          </div>
        </CopyToClipboard>
      </div>
    );
  }