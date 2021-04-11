export interface ICache<T = any> {
  data: T;
  longNum: number;
}

export interface IStringMatch {
  key: string,
  data: string[];
}
