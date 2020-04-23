import { isObject } from '../utils';

import { SchemaBuilder } from '../builder';

/** @this SchemaBuilder */
export const toJSON = function(this: SchemaBuilder) {
  if (isObject(this.output)) {
    return JSON.stringify(this.output);
  }

  return this.output;
};

export { toJSON as toString };
