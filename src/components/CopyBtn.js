
import ClipboardJS from "clipboard";
// info from : https://www.kindacode.com/article/react-copy-to-clipboard-when-click-a-button-link/
// Cant get it working into the display div - into json and out
// this one might be more useful https://ndpniraj.com/blogs/create-copy-to-clipboard-button-using-react-js
// now trying this one - with npm i https://www.npmjs.com/package/react-copy-to-clipboard and set up in Trade.js


new ClipboardJS(".button");

const CopyBtn = () => {
  return (
    <div style={styles.container}>
      <input id="input" type="text" />
      <button
        className="btn"
        data-clipboard-action="copy"
        data-clipboard-target="#input"
      >
        Copy To Clipboard
      </button>
    </div>
  );
};

export default CopyBtn;

const styles = {
  container: {
    margin: "10%",
  },
};