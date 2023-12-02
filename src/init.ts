/**
 * This file is loaded by `index.ts` and is used to initialize the app.
 */
function initializeApp() {
  /**
   * Polyfill for `Array.prototype.find`
   */
  Array.prototype.find = function (callback) {
    for (let i = 0; i < this.length; i++) {
      const item = this[i];
      if (callback(item, i)) {
        return item;
      }
    }

    return undefined;
  };

  /**
   * At least since 2021 AfterEffects has a built-in polyfill for CEP.
   * By loading this, you can use `JSON`
   */
  const AFTER_EFFECTS_JSX_DIRECTORY = `${Folder.appPackage.fsName}/Libraries/jsx`;
  const POLYFILL_FILES = [
    // Plyfill for `JSON`
    new File(`${AFTER_EFFECTS_JSX_DIRECTORY}/json2.jsx`),
    // Polyfill for `Array.prototype.indexOf`, `Array.prototype.map`, `Array.prototype.filter`, `Array.prototype.indexOf`
    new File(`${AFTER_EFFECTS_JSX_DIRECTORY}/shims.jsx`),
  ];

  for (const file of POLYFILL_FILES) {
    if (!file.exists) {
      throw new Error(`Can't loaded polyfill file: ${file.fsName}`);
    }

    $.evalFile(file);
  }
}

initializeApp();
