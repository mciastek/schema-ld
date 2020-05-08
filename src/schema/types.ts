export interface SchemaObject<P> {
  validate: () => Promise<boolean>;
  data: P | null;
};
