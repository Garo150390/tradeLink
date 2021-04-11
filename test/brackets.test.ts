/* eslint-disable no-undef,no-unused-expressions */
import chai from 'chai';

import checkBrackets from '../src/tasks/brackets';

const { expect } = chai;

describe('brackets', () => {
  it('correct scopes', () => {
    expect(checkBrackets('(123[abc]45)')).to.be.true;
  });

  it('incorrect scopes', () => {
    expect(checkBrackets('([abc)]')).to.be.false;
  });
});
