import { checkIfEmpty } from '../utils';
import { SchemaBuilder } from '../builder';

/** @this SchemaBuilder */
export const toScript = function(this: SchemaBuilder) {
  checkIfEmpty(this.output);

  const script = document.createElement('script');

  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(this.output);

  return script;
};
