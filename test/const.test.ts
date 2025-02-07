import { pkgDescription, pkgName, pkgVersion } from '../src/const';

it('应该导出 pkgName', () => {
  expect(pkgName).toBeDefined();
  expect(typeof pkgName).toBe('string');
});

it('应该导出 pkgVersion', () => {
  expect(pkgVersion).toBeDefined();
  expect(typeof pkgVersion).toBe('string');
});

it('应该导出 pkgDescription', () => {
  expect(pkgDescription).toBeDefined();
  expect(typeof pkgDescription).toBe('string');
});
