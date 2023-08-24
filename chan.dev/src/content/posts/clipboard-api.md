---
title: Clipboard API
tags: [web, javascript]
references:
  - https://stackoverflow.com/a/59162806
  - https://stackoverflow.com/a/50067769
  - https://stackoverflow.com/questions/23934656/how-can-i-copy-rich-text-contents-to-the-clipboard-with-javascript
  - https://dev.to/viclafouch/the-new-way-to-copy-an-image-or-a-text-to-clipboard-in-javascript-2n1g
  - https://web.dev/async-clipboard/
  - https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/write
  - https://stackoverflow.com/a/30810322/754775
---

## Complete example for text

```js
let copyTrigger = document.getElementById("copy_body_button");
let copyContent = document.querySelector("main");

copyTrigger.addEventListener("click", () => {
  // Create a new clipboard item
  const item = new ClipboardItem({
    // The clipboard item can hold multiple formats
    // In this case we're encoding the body as HTML for use with CMD+V (paste)
    "text/html": new Blob([copyContent.innerHTML], { type: "text/html" }),
    // And we're encoding a plaintext version for use with CMD+ALT+V (paste without formatting)
    "text/plain": new Blob([copyContent.innerText], { type: "text/plain" }),
  });

  // Push it to the clipboard and handle success/failure signals
  navigator.clipboard.write([item]).then(
    function () {
      console.log("Async: Copying to clipboard was successful!");
    },
    function (err) {
      console.error("Async: Could not copy text: ", err);
    }
  );
});
```
