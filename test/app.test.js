import { describe, it, expect } from 'vitest';
import { twiceAsOld } from '../src/app'

describe('twiceAsOld Function', () => {
    it('should return the correct years for the father to be double the age of the child', () => {
        expect(twiceAsOld(36, 7)).toBe(22);
        expect(twiceAsOld(55, 30)).toBe(5);
        expect(twiceAsOld(42, 21)).toBe(0);
        expect(twiceAsOld(22, 1)).toBe(20);
        expect(twiceAsOld(29, 0)).toBe(29);
    });
});
