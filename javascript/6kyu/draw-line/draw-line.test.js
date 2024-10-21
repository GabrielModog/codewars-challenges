const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Example from the kata description", function() {
  it("should return the correct sequence", function() {
    let start  = {x: 0, y: 0};
    let end    = {x: 1, y: 2};
    let output = [start, {x: 0, y: 1}, end];
    assert.deepEqual(drawLine(start, end), output);
  });
});

describe("Other cases", function() {
  it("should word in both directions", function() {
    let start  = {x: 1, y: 2};
    let end    = {x: 0, y: 0};
    let output = [start, {x: 0, y: 1}, end];
    assert.deepEqual(drawLine(start, end), output);
  });
  it("should draw a row", function() {
    let start  = {x: 10, y: 12};
    let end    = {x: 20, y: 12};
    let output = [];
    for(let i = start.x; i <= end.x; i++) output.push({x: i, y: start.y});
    assert.deepEqual(drawLine(start, end), output);
  });
  it("should draw a column", function() {
    let start  = {x: 10, y: 12};
    let end    = {x: 10, y: 22};
    let output = [];
    for(let i = start.y; i <= end.y; i++) output.push({x: start.x, y: i});
    assert.deepEqual(drawLine(start, end), output);
  });
  it("should work when start and end are identical", function() {
    let start = {x: 13, y: 42};
    assert.deepEqual(drawLine(start, start), [start]);
  });
  it("should draw the three edges of a triangle in both directions", function() {
    let a = {x: 0, y: 7};
    let b = {x: 2, y: 0};
    let c = {x: 6, y: 5};
    let ab = [a,{x:0,y:6},{x:0,y:5},{x:0,y:4},{x:1,y:3},{x:1,y:2},{x:1,y:1},b];
    let bc = [b,{x:2,y:1},{x:3,y:2},{x:4,y:3},{x:5,y:4},c];
    let ca = [c,{x:5,y:5},{x:4,y:5},{x:3,y:6},{x:2,y:6},{x:1,y:6},a];
    assert.deepEqual(drawLine({...a}, {...b}), ab);
    assert.deepEqual(drawLine({...b}, {...c}), bc);
    assert.deepEqual(drawLine({...c}, {...a}), ca);
    assert.deepEqual(drawLine({...b}, {...a}), ab.reverse());
    assert.deepEqual(drawLine({...c}, {...b}), bc.reverse());
    assert.deepEqual(drawLine({...a}, {...c}), ca.reverse());
  });
});