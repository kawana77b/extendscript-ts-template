/**
 * get item from a collection by index
 * @param collection
 * @param idx
 * @returns
 */
function get<T>(collection: Collection, idx: number) {
  const _t = collection as any;
  return _t[idx] as T;
}

/**
 * iterate over a collection of items
 * @param collection
 * @param callback
 */
export function forEach<T extends Collection, K>(
  collection: T,
  callback: (item: K, idx?: number) => void,
): void {
  for (let i = 1; i <= collection.length; i++) {
    const item = get<K>(collection, i);
    callback(item, i);
  }
}

/**
 * find an item in a collection
 * @param collection
 * @param callback
 * @returns
 */
export function find<T extends Collection, K>(
  collection: T,
  callback: (item: K) => boolean,
): K | undefined {
  for (let i = 1; i <= collection.length; i++) {
    const item = get<K>(collection, i);
    if (callback(item)) {
      return item;
    }
  }
  return undefined;
}

/**
 * filter a collection of items
 * @param collection
 * @param callback
 * @returns
 */
export function filter<T extends Collection, K>(
  collection: T,
  callback: (item: K, idx?: number) => boolean,
): Item[] {
  const filtered: any[] = [];
  for (let i = 1; i <= collection.length; i++) {
    const item = get<K>(collection, i);
    if (callback(item, i)) {
      filtered.push(item);
    }
  }
  return filtered;
}

/**
 * map a collection of items
 * @param collection
 * @param callback
 * @returns
 */
export function map<T extends Collection, K, V>(
  collection: T,
  callback: (item: K, idx?: number) => V,
): V[] {
  const mapped: V[] = [];
  for (let i = 1; i <= collection.length; i++) {
    const item = get<K>(collection, i);
    mapped.push(callback(item, i));
  }
  return mapped;
}

/**
 * check if every item in a collection passes a test
 * @param collection
 * @param callback
 * @returns
 */
export function every<T extends Collection, K>(
  collection: T,
  callback: (item: K) => boolean,
): boolean {
  for (let i = 1; i <= collection.length; i++) {
    const item = get<K>(collection, i);
    if (!callback(item)) {
      return false;
    }
  }
  return true;
}

/**
 * check if some items in a collection pass a test
 * @param collection
 * @param callback
 * @returns
 */
export function some<T extends Collection, K>(
  collection: T,
  callback: (item: K) => boolean,
): boolean {
  for (let i = 1; i <= collection.length; i++) {
    const item = get<K>(collection, i);
    if (callback(item)) {
      return true;
    }
  }
  return false;
}

/**
 * convert a collection of items to an array
 * @param collection
 * @returns
 */
export function toArray<T extends Collection, K>(collection: T): K[] {
  return map<T, K, K>(collection, (item) => item);
}
