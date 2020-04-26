import { SchemaObject } from './schema/types';

import * as converters from './converters';

export interface SchemaBuilder {
  output: object;
  validators: Set<() => boolean>;
  add: (...entries: SchemaObject<{}>[]) => SchemaBuilder;
  remove: (...entries: SchemaObject<{}>[]) => SchemaBuilder;
  validate: () => SchemaBuilder;
  clear: () => SchemaBuilder;
  toObject: () => SchemaBuilder['output'];
  toJSON: () => string;
  toScript: () => HTMLScriptElement;
  toString: SchemaBuilder['toJSON'];
}

const getBuilder = (): SchemaBuilder => ({
  validators: new Set(),
  output: {},
  add(...entries: SchemaObject<{}>[]) {
    entries.forEach((entry) => (
      this.validators.add(entry.validate)
    ));

    return this.validate();
  },
  remove(...entries: SchemaObject<{}>[]) {
    entries.forEach((entry) => (
      this.validators.delete(entry.validate)
    ));

    return this;
  },
  validate() {
    this.validators.forEach((validate) => validate());

    return this;
  },
  clear() {
    this.validators.clear();

    return this;
  },
  toObject: converters.toObject,
  toJSON: converters.toJSON,
  toScript: converters.toScript,
  toString: converters.toString,
});

// eslint-disable-next-line @typescript-eslint/tslint/config
const schema = () => getBuilder();
schema.create = schema;

export default schema;
