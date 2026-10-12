import { describe, expect, it } from 'vitest';
import { validateImageFile, safeBaseName, MAX_IMAGE_BYTES } from './imageValidation';
describe('validateImageFile', () => {
  it('accepts supported image types under the size limit', () => {
    expect(validateImageFile({ type: 'image/png', size: 1200, name: 'portrait.png' })).toBeNull();
    expect(validateImageFile({ type: 'image/jpeg', size: 1200, name: 'portrait.jpg' })).toBeNull();
    expect(validateImageFile({ type: 'image/webp', size: 1200, name: 'portrait.webp' })).toBeNull();
  });
  it('rejects unsupported types, empty files and oversized files', () => {
    expect(validateImageFile({ type: 'image/gif', size: 1200, name: 'x.gif' })).toMatch(/Formato/);
    expect(validateImageFile({ type: 'image/png', size: 0, name: 'x.png' })).toMatch(/vazio/);
    expect(validateImageFile({ type: 'image/png', size: MAX_IMAGE_BYTES + 1, name: 'x.png' })).toMatch(/15 MB/);
  });
});
describe('safeBaseName', () => {
  it('removes extension and unsafe characters', () => {
    expect(safeBaseName('minha foto!.png')).toBe('minha-foto');
    expect(safeBaseName('....')).toBe('stylemirror');
  });
});