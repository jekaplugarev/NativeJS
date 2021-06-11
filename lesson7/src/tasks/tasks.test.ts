import {calculator, div, getCopyStudent, mult, sum} from './tasks'

test('sum', () => {
    const a: number = 10
    const b: number = 5
    const result = sum(a, b)
    expect(result).toBe(15)
})

test('div', () => {
    const a: number = 10
    const b: number = 5
    const result = div(a, b)
    expect(result).toBe(2)
})

test('mult', () => {
    expect(mult(10, 5)).toBe(50)
})

test('calculator', () => {
    expect(calculator(10, 5, {type: 'sum'})).toBe(15)
    expect(calculator(10, 5, {type: 'div'})).toBe(2)
    expect(calculator(10, 5, {type: 'mult'})).toBe(50)
    expect(calculator(10, 5, {type: 'sub'})).toBe(5)
})

//TDD

test('deep copy of student', () => {
    const student = {
        name: 'Bob',
        age: 23,
        isMarried: true,
        friends: ['Alex', 'Mike']
    }

    const deepCopyStudent = getCopyStudent(student)
    expect(deepCopyStudent === student).toBe(false)
    expect(deepCopyStudent.name === student.name).toBe(true)
    expect(deepCopyStudent.age === student.age).toBe(true)
    expect(deepCopyStudent.isMarried === student.isMarried).toBe(true)
    expect(deepCopyStudent.friends === student.friends).toBe(false)
    expect(deepCopyStudent.friends[0] === student.friends[0]).toBe(true)
})