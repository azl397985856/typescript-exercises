type A = <T>(input: T[], comparator: (a: T, b: T) => number) => number;

type B = <T>(input: T[], comparator: (a: T, b: T) => number) => T;

declare module "stats" {
  export const getMaxIndex: A;
  export const getMinIndex: A;
  export const getMedianIndex: A;

  export const getAverageValue: B;
  export const getMinElement: B;
  export const getMaxElement: B;
  export const getMedianElement: B;
}
