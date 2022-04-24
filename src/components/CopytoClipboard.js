import React, { useState } from "react";
import Trade  from './Trade'

export default function CopyBtnDemo({ textToCopy = <Trade div={'trade'} /> }) {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {

    
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        setCopied(true);
        // changing back to default state after 2 seconds.
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      },
      (err) => {
        console.log("failed to copy", err.mesage);
      }
    );
  };

  const btnStyle = copied ? "btn" : "";

  return (
    <div className="text-center my-5">
      <button
        onClick={copyToClipboard}
        className={
          btnStyle +
          " btn"
        }
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

