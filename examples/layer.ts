// @ts-nocheck

import "./init"; // NOTE: This is required. Load the required polyfills
import { find, forEach, toArray } from "./lib/collection";

// If the project has compositions, debug display the layer name of the first obtained compo

// Function procedural example:
function displayCompLayerNames1() {
  const comp = find<ItemCollection, CompItem>(
    app.project.items,
    (item) => item instanceof CompItem,
  );

  if (comp) {
    forEach<LayerCollection, Layer>(comp.layers, (layer) => {
      $.writeln(layer.name);
    });
  }
}

// a standard javascript array example:
function displayCompLayerNames2() {
  const items = toArray<ItemCollection, Item>(app.project.items);
  const comp = items.find((item) => item instanceof CompItem);

  if (comp instanceof CompItem) {
    const layers = toArray<LayerCollection, Layer>(comp.layers);
    for (const layer of layers) {
      $.writeln(layer.name);
    }
  }
}

displayCompLayerNames1();

$.writeln("----");

displayCompLayerNames2();
