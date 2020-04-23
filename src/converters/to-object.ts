import { SchemaBuilder } from '../builder';

/** @this SchemaBuilder */
export const toObject = function(this: SchemaBuilder) {
  return this.output;
};
