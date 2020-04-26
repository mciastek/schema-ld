import { Thing } from '../../src/schema/Thing';

describe('Thing', () => {
  it('creates ThingObject', () => {
    const thing = Thing({
      name: 'Something',
    });

    expect(thing).toMatchObject({
      data: expect.objectContaining({
        '@type': 'Thing',
        name: 'Something',
      }),
      validate: expect.anything(),
    });
  });
});
