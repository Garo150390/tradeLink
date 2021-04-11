/* eslint-disable no-undef,no-unused-expressions */
import chai from 'chai';

import divideAndRule from '../src/tasks/divide_and_rule';

const { expect } = chai;

const words = 'abcdef ffff Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna' +
  ' aliqua.'
  + ' Vulputate mi sit amet mauris commodo quis. In ante metus dictum at tempor. Consectetur adipiscing'
  + ' elit pellentesque habitant morbi tristique senectus et. Accumsan tortor posuere ac ut consequat semper'
  + ' viverra nam libero. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Tristique'
  + ' sollicitudin nibh sit amet commodo nulla facilisi nullam. Rhoncus mattis rhoncus urna neque viverra'
  + ' Aliquam faucibus purus in massa tempor nec feugiat nisl pretium. Suscipit tellus mauris'
  + ' diam maecenas sed enim ut sem. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim'
  + ' cras. Nulla facilisi cras fermentum odio eu feugiat pretium nibh. Adipiscing enim eu turpis egestas'
  + ' pretium aenean pharetra magna ac. Egestas dui id ornare arcu. Nec tincidunt praesent semper feugiat'
  + ' nibh sed pulvinar proin. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo'
  + ' Ac placerat vestibulum lectus mauris ultrices eros'
  + ' Maecenas sed enim ut sem viverra aliquet eget sit amet. Turpis egestas maecenas pharetra convallis'
  + ' posuere. Aliquam vestibulum morbi blandit cursus risus at. Dis parturient montes nascetur ridiculus'
  + ' Ac orci phasellus egestas tellus. Ultrices eros in cursus turpis massa. Facilisi morbi tempus';

describe('divide And Rule', () => {
  const prefixs = ['abcd', 'cdef', 'ab', 'ef', 'ffff'];

  it('should return 2 abcd:ef ab:cdef', async () => {
    divideAndRule.checkStringConcat(prefixs.length.toString());
    prefixs.forEach((prefix) => divideAndRule.checkStringConcat(prefix));

    const texts = words.split(' ');
    divideAndRule.checkStringConcat((texts.length + 1).toString());
    texts.forEach((text) => divideAndRule.checkStringConcat(text));
    const data = await divideAndRule.checkStringConcat('');
    expect(data[0]).to.be.equal('2 abcd:ef ab:cdef');
  });
});
