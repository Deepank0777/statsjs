import { expect } from 'chai';
import 'mocha';
import { harmonicMean, mean, median } from '../src/statistics';

describe('Statistics', () => {
  it('Should calculate Mean', () => {
    let m = mean([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(m).to.equals(5.5);
    m = mean([3.5, 4.0, 5.25]);
    expect(m).to.equals(4.25);
  });
  it('Should calculate Median', () => {
    let med = median([0, 1, 2, 4, 5]);
    expect(med).to.equals(2);
    med = median([10, 40, 20, 50]);
    expect(med).to.equals(30);
  });

  it('Should calculate Harmonic Mean', () => {
    const hmean = harmonicMean([8, 9, 6, 11, 10, 5]);
    expect(hmean).to.equals(7.56);
  });
});
