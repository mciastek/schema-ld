import { checkIfEmpty } from '../utils';
import { SchemaBuilder } from '../builder';

/** @this SchemaBuilder */
export const toObject = function(this: SchemaBuilder) {
  checkIfEmpty(this.output);

  return this.output;
};
