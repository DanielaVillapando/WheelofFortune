describe('testing beginning values', ()=> {
    it('wheelvalue should appear', () =>{
        expect(wheelvalue).toEqual([700,500,250,800,400,0,300,650,3000,700,500,800,450,0,2000,300,600,500,750,50,900,600,350,1000])
    })
    it('degree should be 0'), ()=>{
        expect(deg).toBe(0)
    }
    it('puzzle should be empty', ()=>{
        expect(puzzle).toBe('')
    })
    it('total score should be 0', ()=>{
        expect(totalScore).toBe(0)
    })
    it('round score should be 0', ()=>{
        expect(roundScore).toBe(0)
    })
    it('points should be 0', ()=>{
        expect(points).toBe(0)
    })
    it('round number should be at 0', ()=>{
        expect(round).toBe(0)
    })
})

describe('testing functions', ()=>{
    it('function random() should return a randomized number', ()=>{
        expect(random()).toEqual(jasmine.any(Number))
    })
    it('function addPoints() should add the correct values', ()=>{
        let roundScore = 10
        let points = 10
        expect(addPoints(roundScore, points)).toBe(20)
    })
    it('function subtractPoints() should subtract the correct values', ()=>{
        let roundScore = 15
        let points = 10
        expect(subtractPoints(roundScore, points)).toBe(5)
    })
    it('function addTotal() should add the correct values', ()=>{
        let roundScore = 10
        let totalScore = 10
        expect(addTotal(totalScore, roundScore)).toBe(20)
    })
    it('function getPoints() should return a randomized number', ()=>{
        let pointArray = []
        expect(getPoints()).toEqual(jasmine.any(Number))
    })
    it('function getPuzzle() should return a random string from the word bank', ()=>{
        expect(getPuzzle()).toEqual(jasmine.any(Object))
    })
})


describe('testing spinner values of spinner button', ()=>{
    it('idk how to do this yet so fuck my life yo', () => {

    })///need to figure how to test values after the 'addEventListener' functions are ran
})

describe('testing round button', ()=>{
    it('i also do not know how to do this so fuck my life: the sequel', ()=>{

    })///same problem as the comment above
})