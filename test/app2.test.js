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

describe('testing returning functions', ()=>{
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


describe('testing functions', () => {

    it('clearPictureRight() should remove right pic', () => {
        let left = '000'
        displayPictureRight(left)
        clearPictureRight()
        expect(left.toEqual(""))
    })
    it('clearPictureRight() should remove right pic', () => {
        let left = '000'
        displayPictureRight(left)
        clearPictureRight()
        expect(left.toEqual(""))
    })
    it('displayMessage() should return message', () => {
        let testMessage = 'Test message'
        displayMessage(testMessage)
        expect(document.getElementById("message").innerHTML).toBe(testMessage);
    })
})

describe('testing spin button', ()=>{
    beforeEach(() => {
        createSpinButton()
    });

    it('disabled', () => {
        disableSpinButton()
        expect(document.getElementById("spinBtn").disabled).toBeTruthy();
    })
    it('enabled', () => {
        enableSpinButton()
        expect(document.getElementById("spinBtn").disabled).toBeFalsy();
    })
})

describe('testing round button', ()=>{
    it('disabled', () => {
        disablePlayButton()
        expect(document.getElementById("playBtn").disabled).toBeTruthy();
    })
    it('changePlayButton()', () => {
        let text = 'Test'
        changePlayButton(text)
        expect(document.getElementById("playBtn").innerHTML).toBe(text);
    })
})

// describe('testing buttons', () => {

//     beforeEach(() => {
//         createSpinButton()
//         fixture = TestBed.createComponent(CaseComponent);
//         component = fixture.componentInstance;
//         fixture.detectChanges();
//         submitEl = fixture.debugElement
//     });

//     it('spin button disabled', () => {
//         component.disableCreate = true;
//         component.data = null;
//         fixture.detectChanges();
//         expect(submitEl.nativeElement.querySelector('#spinBtn').disabled).toBeTruthy();
//     })
//     it('spin button enabled', () => {
//         component.disableCreate = false;
//         component.data = null;
//         fixture.detectChanges();
//         expect(submitEl.nativeElement.querySelector('#spinBtn').disabled).toBeFalsy();
//     })
// })