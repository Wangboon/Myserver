import { Utils } from "./Utils";

describe('Utils.add(a,b)', () => {
    it('test: a=2 ,b=3, return 5', () => {
        expect(Utils.add(2, 3)).toBe(5);
    });
});

describe('Utils.add(a,b)', () => {
    it('test: a=6 ,b=2, return 8', () => {
        expect(Utils.add(6, 2)).toBe(8);
    });
});