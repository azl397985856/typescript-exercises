type FieldQuery<FT> = { $eq: FT } | { $gt: FT } | { $lt: FT } | { $in: FT[] };

type Query<T extends {}> = { [K in keyof T]?: FieldQuery<T[K]> } & {
  $text?: string;
  $and?: Query<T>[];
  $or?: Query<T>[];
};

export class Database<T> {
  protected filename: string;
  protected fullTextSearchFieldNames: (keyof T)[];

  constructor(filename: string, fullTextSearchFieldNames: (keyof T)[]) {
    this.filename = filename;
    this.fullTextSearchFieldNames = fullTextSearchFieldNames;
  }

  async find(query: Query<T>): Promise<T[]> {
    return [];
  }
}
