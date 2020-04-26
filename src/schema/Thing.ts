import { Thing as ThingSchema } from 'schema-dts';

import { SchemaObject } from './types';

export type ThingParams = Omit<ThingSchema, '@type'>;

export const Thing = (params: ThingParams): SchemaObject<ThingSchema> => ({
  data: {
    '@type': 'Thing',
    ...params,
  },
  validate: () => true,
});
