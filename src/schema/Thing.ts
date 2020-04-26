import { Thing as ThingSchema, WithContext } from 'schema-dts';

import { SchemaObject } from './types';

export type ThingType = Exclude<ThingSchema, string>;
export type ThingParams = Omit<ThingType, '@type'>;

export const Thing = (
  params: ThingParams,
): SchemaObject<WithContext<ThingType>> => ({
  data: {
    '@context': 'https://schema.org',
    '@type': 'Thing',
    ...params,
  },
  validate: () => true,
});
