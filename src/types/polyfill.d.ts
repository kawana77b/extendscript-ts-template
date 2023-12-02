declare global {
  interface Array<T> {
    isArray(value: any): boolean;
    indexOf(value: any): number;
    filter(callback: (item: T, idx?: number) => boolean): T[];
    map<V>(callback: (item: T, idx?: number) => V): V[];

    find(callback: (item: T, idx?: number) => boolean): T | undefined;
  }

  interface JSON {
    parse(text: string): any;
    stringify(value: any): string;
  }

  declare const JSON: JSON;
}

export {};
