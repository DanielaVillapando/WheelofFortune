
describe('beginning values', ()=> {
    it('score should be 0', ()=>{
        expect(score).toEqual(0)
    })
    it('points shoudl be 0', ()=>{
        expect(points).toEqual(0)
    })
    it('puzzle should be empty', ()=>{
        expect(puzzle).toEqual('')
    })
    it('pointArray should appear', () =>{
        expect(pointArray).toEqual([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 500, 600, 700, 2000, 200, -1000])
    })
})
