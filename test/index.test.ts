import { expect, it } from 'vitest';
import { createCLI } from '../src/index';

it('createCLI 是非方法', async () => {
  expect(typeof createCLI).toBe('function');
});
