import { SchemaBuilder } from '../builder';

/** @this SchemaBuilder */
export const toScript = function(this: SchemaBuilder) {
  const script = document.createElement('script');

  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(this.output);

  return script;
};
