import isEmpty from 'lodash/isEmpty';

import { SchemaBuilder } from './builder';

export const checkIfEmpty = (output: SchemaBuilder['output']) => {
  if (!output || isEmpty(output)) {
    throw new Error('Schema cannot be empty!');
  }
};
