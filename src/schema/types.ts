export interface SchemaObject<P> {
  validate: () => boolean;
  data: P | null;
};
