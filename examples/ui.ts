// @ts-nocheck

import "./init"; // NOTE: This is required. Load the required polyfills
import { bounds } from "./lib/ui";

function getDialog() {
  const w = new Window("dialog", "my dialog");
  const editText = w.add("edittext", bounds(10, 10, 100, 10), "");
  editText.size.width = 200;
  editText.size.height = 20;

  const button = w.add("button", bounds(20, 30, 100, 10), "Submit");
  button.size.width = 200;
  button.size.height = 20;

  return { w, editText, button };
}

const { w, editText, button } = getDialog();
button.enabled = false;

editText.onChanging = () => {
  button.enabled = editText.text.length > 0;
};

button.onClick = () => {
  const text = `hello ${editText.text}!`;
  alert(text);
};

w.show();
