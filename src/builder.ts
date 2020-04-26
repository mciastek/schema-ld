
export interface SchemaBuilder {
  output: object;
  validators: Set<() => boolean>;
}

