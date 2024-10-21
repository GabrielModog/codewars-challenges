const { expect } = require('chai')

describe('not random tests - { aaa: 1, abc: 2, dfg: 3, def: 4, dfgh: 5 }', () => {
  let subject = partialKeys({
    aaa: 1,
    abc: 2,
    dfg: 3,
    def: 4,
    dfgh: 5
  })
  
  it(`should return 1 for keys 'a' and 'aa'`, () => {
    expect(subject.a).to.be.equal(1)
    expect(subject.aa).to.be.equal(1)
  })
  
  it(`should return 2 for key 'ab'`, () => {
    expect(subject.ab).to.be.equal(2)
  })
  
  it(`should return 3 for key 'df'`, () => {
    expect(subject.df).to.be.equal(3)
  })
  
  it(`should return 4 for keys 'd' and 'de'`, () => {
    expect(subject.d).to.be.equal(4)
    expect(subject.de).to.be.equal(4)
  })
  
  it(`should only return 5 for key 'dfgh'`, () => {
    expect(subject.dfg).to.be.equal(3)
    expect(subject.dfgh).to.be.equal(5)
  })
  
  it(`should be undefined for non-matching keys (e.g. 'b', 'c', 'ef')`, () => {
    expect(subject.b).to.be.equal(undefined)
    expect(subject.c).to.be.equal(undefined)
    expect(subject.ef).to.be.equal(undefined)
  })
})