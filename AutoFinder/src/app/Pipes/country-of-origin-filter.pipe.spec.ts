import { CountryOfOriginFilterPipe } from './country-of-origin-filter.pipe';

describe('CountryOfOriginFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new CountryOfOriginFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
