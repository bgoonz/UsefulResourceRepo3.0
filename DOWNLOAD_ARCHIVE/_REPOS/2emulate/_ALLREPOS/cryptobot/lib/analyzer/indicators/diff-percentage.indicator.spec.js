const { expect } = require('chai');
const sinon = require('sinon');

const DiffPercentage = require('./diff-percentage.indicator');

describe('Diff Percentage Indicator', function () {
  this.timeout(100);

  describe('#update', () => {
    let dp;

    beforeEach(() => {
      dp = new DiffPercentage(3);
    });

    it('no value', () => {
      const actual = dp.update();
      const expected = [];
      expect(actual).to.eql(expected);
    });

    it('should return null with 1 value', () =>{
      const actual = dp.update(0);
      const expected = [null];
      expect(actual).to.eql(expected);
    });

    it('should rotate numbers after the period', () => {
      const input = [10, 7.5, 1.5];
      dp.update();
      dp.update(20);
      const actual = dp.update(input);
      const expected = [-0.5, -0.25, -0.8];
      expect(dp.in).to.eql(input);
      expect(actual).to.eql(expected);
    });

    it('should rotate numbers in order', () => {
      dp.update(4607.74);
      expect(dp.out).to.eql([null]);
      // dp.update(3669.01);
      // expect(dp.out).to.eql([null, -0.2037289430393207]);
      dp.update([3669.01, 4394.81]);
      expect(dp.out).to.eql([null, -0.2037289430393207, 0.19781903020160754]);
      dp.update(4211.31);
      expect(dp.out).to.eql([-0.2037289430393207, 0.19781903020160754, -0.04175379595477392]);
      dp.update(7301);
      expect(dp.out).to.eql([0.19781903020160754, -0.04175379595477392, 0.733664821635073]);
    });
  });
});