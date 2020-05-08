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

  describe('validate', () => {
    describe('when data is valid', () => {
      it('should return true', async () => {
        const thing = Thing({
          name: 'Something',
        });

        await expect(thing.validate()).resolves.toBe(true);
      });
    });
  });
});
