///=== LESSON 7 ===///

// export function sum(a: number, b: number) {
//     return a + b
// }
//
// export function mult(a: number, b: number) {
//     return a * b
// }
//
// export function div(a: number, b: number) {
//     return a / b
// }
//
// export function sub(a: number, b: number) {
//     return a - b
// }
//
// type ActionType = {
//     type: 'sum' | 'mult' | 'div' | 'sub'
// }
//
// export function calculator(a: number, b: number, action: ActionType) {
//     switch (action.type) {
//         case 'sum':
//             return a + b
//         case 'mult':
//             return a * b
//         case 'div':
//             return a / b
//         case 'sub':
//             return a - b
//         default:
//             return 'Error of type action'
//     }
// }
//
// calculator(5, 5, {type: 'sum'})
//
// type StudentType = {
//     name: string
//     age: number
//     isMarried: boolean
//     friends: Array<string>
// }
//
// export function getCopyStudent(student: StudentType): StudentType {
//     return {...student, friends: [...student.friends]}
// }

///=== LESSON 8=== ///

export function sumVar1(num: number) {
    let sum = 0
    for (let i = 0; i <= num; i++) {
        sum += i
    }
    return sum
}

export function sumVar2(...nums: Array<number>) {
    return nums.reduce((acc, el) => acc + el)
}

export function getTriangleType(a: number, b: number, c: number): string {
    if (a + b > c && b + c > a && c + a > b) {
        if (a === b && b === c) {
            return '10'
        } else if (a === b || b === c || c == a) {
            return '01'
        } else {
            return '11'
        }
    } else {
        return '00'
    }
}

export function getSum(num: number): number {
    return num
        .toString()
        .split('')
        .reduce((acc, el) => acc + Number(el), 0)
}

export function isEvenSumGreater(num: Array<number>): boolean {
    let sums: Array<number> = num.reduce((acc, el, i) => {
        acc[i % 2] += el
        return acc
    }, [0, 0])
    return sums[0] > sums[1]
}