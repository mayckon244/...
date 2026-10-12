import { describe, expect, it } from 'vitest';
import { hairStyles, glassesStyles } from './styles';
describe('style catalogue', () => {
  it('provides five hair styles and five glasses styles with unique ids', () => {
    expect(hairStyles).toHaveLength(5);
    expect(glassesStyles).toHaveLength(5);
    expect(new Set(hairStyles.map(x => x.id)).size).toBe(5);
    expect(new Set(glassesStyles.map(x => x.id)).size).toBe(5);
  });
  it('keeps all glasses frame dimensions positive', () => {
    for (const frame of glassesStyles) {
      expect(frame.width).toBeGreaterThan(0);
      expect(frame.height).toBeGreaterThan(0);
      expect(frame.bridge).toBeGreaterThan(0);
    }
  });
});