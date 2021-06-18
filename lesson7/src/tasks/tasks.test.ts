/// LESSON 8

import {getSum, getTriangleType, isEvenSumGreater, sumVar1, sumVar2} from './tasks'

test('sumVar1', () => {
    expect(sumVar1(3)).toBe(6)
})

test('sumVar2', () => {
    expect(sumVar2(2, 5, 3)).toBe(10)
})

test('get triangle type', () => {
    expect(getTriangleType(1, 1, 1)).toBe('10')
    expect(getTriangleType(3, 3, 2)).toBe('01')
    expect(getTriangleType(5, 4, 3)).toBe('11')
    expect(getTriangleType(10, 5, 5)).toBe('00')
})

test('get sum', () => {
    expect(getSum(1000)).toBe(1)
    expect(getSum(1234)).toBe(10)
    expect(getSum(9999)).toBe(36)
})

test('is Even Sum Greater', () => {
    expect(isEvenSumGreater([1, 100, 2, 200])).toBe(false)
    expect(isEvenSumGreater([100, 1, 200, 2])).toBe(true)

})

