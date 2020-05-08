import { Thing as ThingSchema, WithContext } from 'schema-dts';
import Ajv from 'ajv';
import parseJson from 'parse-json';

import ThingSchemaJSON from 'schemaorg-jsd/schema/Thing.jsd';

import { SchemaObject } from './types';

export type ThingType = Exclude<ThingSchema, string>;
export type ThingParams = Omit<ThingType, '@type'>;

const toJSON = (input: string) => parseJson(input);

// @ts-ignore
console.log(toJSON(require('schemaorg-jsd/meta/member.jsd')));

const getJSONLDSchema = () => {
  const data = require('../jsonld.json');
  data.$schema = 'http://json-schema.org/draft-07/schema#';
  data.$id = 'https://json-ld.org/schemas/jsonld-schema.json';

  return data;
};

const validator = new Ajv()
  .addMetaSchema([
    require('schemaorg-jsd/meta/member.jsd'),
    require('schemaorg-jsd/meta/type.jsd'),
  ].map(toJSON))
  .addSchema(getJSONLDSchema())
  .addSchema([
    require('schemaorg-jsd/schema/additionalType.prop.jsd'),
    require('schemaorg-jsd/schema/description.prop.jsd'),
    require('schemaorg-jsd/schema/disambiguatingDescription.prop.jsd'),
    require('schemaorg-jsd/schema/identifier.prop.jsd'),
    require('schemaorg-jsd/schema/image.prop.jsd'),
    require('schemaorg-jsd/schema/mainEntityOfPage.prop.jsd'),
    require('schemaorg-jsd/schema/name.prop.jsd'),
    require('schemaorg-jsd/schema/potentialAction.prop.jsd'),
    require('schemaorg-jsd/schema/sameAs.prop.jsd'),
    require('schemaorg-jsd/schema/url.prop.jsd'),
    require('schemaorg-jsd/schema/URL.jsd'),
    require('schemaorg-jsd/schema/Text.jsd'),
    require('schemaorg-jsd/schema/PropertyValue.jsd'),
    require('schemaorg-jsd/schema/StructuredValue.jsd'),
    require('schemaorg-jsd/schema/Intangible.jsd'),
    require('schemaorg-jsd/schema/maxValue.prop.jsd'),
    require('schemaorg-jsd/schema/Number.jsd'),
    require('schemaorg-jsd/schema/minValue.prop.jsd'),
    require('schemaorg-jsd/schema/unitCode.prop.jsd'),
    require('schemaorg-jsd/schema/unitText.prop.jsd'),
    require('schemaorg-jsd/schema/value.prop.jsd'),
    require('schemaorg-jsd/schema/Boolean.jsd'),
    require('schemaorg-jsd/schema/ImageObject.jsd'),
    require('schemaorg-jsd/schema/MediaObject.jsd'),
    require('schemaorg-jsd/schema/CreativeWork.jsd'),
    require('schemaorg-jsd/schema/creator.prop.jsd'),
    require('schemaorg-jsd/schema/Organization.jsd'),
    require('schemaorg-jsd/schema/address.prop.jsd'),
    require('schemaorg-jsd/schema/PostalAddress.jsd'),
  ].map(toJSON));

export const Thing = (
  params: ThingParams,
): SchemaObject<WithContext<ThingType>> => ({
  data: {
    '@context': 'https://schema.org',
    '@type': 'Thing',
    ...params,
  },
  async validate() {
    const isValid = await validator.validate(toJSON(ThingSchemaJSON), this.data);

    return isValid;
  },
});
