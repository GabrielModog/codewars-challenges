const sampMaze = [ [ 1, 1, 1, 1, 1, 1 ],
  [ 1, 0, 0, 0, 0, 1 ],
  [ 1, 0, 1, 0, 1, 1 ],
  [ 0, 0, 1, 0, 0, 0 ],
  [ 1, 0, 1, 1, 0, 1 ],
  [ 1, 1, 1, 1, 1, 1 ] ]

const sampMazeSolved = [ [ 1, 1, 1, 1, 1, 1 ],
  [ 1, 2, 2, 2, 0, 1 ],
  [ 1, 2, 1, 2, 1, 1 ],
  [ 2, 2, 1, 2, 2, 2 ],
  [ 1, 0, 1, 1, 0, 1 ],
  [ 1, 1, 1, 1, 1, 1 ] ]

describe("solveMaze()", function() {
    it("Should solve a sample maze", function() {
        Test.assertSimilar(solveMaze(sampMaze), sampMazeSolved);
    })
})