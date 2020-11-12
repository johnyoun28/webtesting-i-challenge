const {enhancer, success, fail, repair } = require('./enhancer.js');
// test away!

describe('testing success', () => {
    it('exists', () => {
        expect(success).toBeDefined()
    })
    it('enhances >= 20', () => {
        expect(success({ enhancement: 15 })).toEqual({ enhancement: 16})
    })
})


describe('testing fail', () => {
    it('exists', () => {
        expect(fail).toBeDefined()
    })
    it('enhances < 15', () => {
        expect(fail({ enhancement: 10 })).toEqual({ enhancement: 5})
    })
})

describe('testing repair', () => {
    it('exists', () => {
        expect(repair).toBeDefined()
    })
    it('repair', () => {
        expect(repair({ durability: 1 })).toEqual({ durability: 100})
    })
})