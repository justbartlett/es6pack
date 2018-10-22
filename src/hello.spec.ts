import { Hello } from './hello';

describe('hello', () => {
    it('should greet', () => {
        const hello = new Hello('Juri');
        spyOn(console, 'log');

        hello.greet();

        expect(console.log).toHaveBeenCalled();
    });
});
