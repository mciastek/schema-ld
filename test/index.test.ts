import schema from '../src/builder';

describe('schema', () => {
  it('creates schema builder', () => {
    expect(schema()).toMatchObject({
      add: expect.anything(),
      remove: expect.anything(),
    });

    expect(schema.create()).toMatchObject({
      add: expect.anything(),
      remove: expect.anything(),
    });
  });
});
