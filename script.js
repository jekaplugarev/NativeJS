// event
// function - subscriber, listener, handler
// e, ev, event

// const sm = document.getElementById('small')
// const newDiv = document.createElement('div')
// newDiv.style.height = '50px'
// newDiv.style.backgroundColor = 'black'
// // newDiv.style.display = 'none'
// sm.style.cssText = `height: 10px;`
// sm.append(newDiv)

// function onClickHandler(e) {
// 	console.log(e.currentTarget)
// 	console.log(e.target)
// }

// sm.onclick = onClickHandler
// document.body.onclick = onClickHandler

///=== Занятие 5 ===///

// "use strict";

// const array = [22,34,12,1,56,99,0,65,76]

// for (let j = 0; j < array.length - 1; j++) {
// 	for (let i = 0; i < array.length - 1 - j; i++) {
// 		if (array[i] > array[i + 1]) {
// 			[array[i], array[i + 1]] = [array[i + 1], array[i]]
// 			// let temp = array[i]
// 			// array[i] = array[i + 1]
// 			// array[i + 1] = temp
// 		}
// 	}
// }
// console.log(array);

// ///sort
// const strings = ['Bob', 'Alex', 'игорь', 'Donald', 'redux', '900', 'Юрий']
// console.log(strings.sort()); //сортирует в порядке символов unicode

// const numbers = [1000, 2, 1, 90]
// console.log(numbers.sort()); 

// function compare(a, b) {
// 	if (a <= b) {
// 		return -1
// 	} else {
// 		return 1
// 	}
// }
// console.log(numbers.sort(compare));

// const students = [
// 	{
// 		name: 'Nick',
// 		age: 22,
// 		isMarried: false,
// 		scores: 120
// 	},
// 	{
// 		name: 'John',
// 		age: 20,
// 		isMarried: false,
// 		scores: 126
// 	},
// 	{
// 		name: 'alex',
// 		age: 25,
// 		isMarried: true,
// 		scores: 100
// 	},
// 	{
// 		name: 'Helga',
// 		age: 21,
// 		isMarried: true,
// 		scores: 89
// 	}
// ]

// console.log(students
// 	.sort((a, b) => a.scores - b.scores)
// 	.reverse()
// );

// console.log(students.sort((a, b) => a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1))


/// ЗАНЯТИЕ 6 ====

const user = {
    name: 'Bob',
    age: 23,
    friends: ['Alex', 'Nick', 'John']
}

const students = [
    {
        name: 'Nick',
        age: 22,
        isMarried: false,
        scores: 120
    },
    {
        name: 'John',
        age: 20,
        isMarried: false,
        scores: 126
    },
    {
        name: 'alex',
        age: 25,
        isMarried: true,
        scores: 100
    },
    {
        name: 'Helga',
        age: 21,
        isMarried: true,
        scores: 150
    },
    {
        name: 'Ann',
        age: 19,
        isMarried: false,
        scores: 130
    }
]

//1 Поверхностная копия

let copyUser = {...user}
console.log('Задание 1')
console.log(user === copyUser)
console.log(user.friends === copyUser.friends)

//2 Глубокая копия

let deepCopyUser = {...user, friends: [...user.friends]}
console.log('Задание 2')
console.log(user === deepCopyUser)
console.log(user.friends === deepCopyUser.friends)

//3 Поверхностная копия

let copyStudents = [...students]
console.log('Задание 3')
console.log(students === copyStudents)
console.log(students[1] === copyStudents[1])

//4 Глубокая копия через map

let deepCopyStudents = students.map(s => ({...s}))
console.log('Задание 4')
console.log(students === deepCopyStudents)
console.log(students[1] === deepCopyStudents[1])

//5 Сортировка по алфавиту sort

let sortByName = [...deepCopyStudents].sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1)
console.log('Задание 5')
console.log(sortByName)

//5a Сортировка по счету sort

let sortByScores = [...deepCopyStudents].sort((a, b) => b.scores - a.scores)
console.log('Задание 5a')
console.log(sortByScores)

//6 students scores >= 100 filter

let bestStudents = [...deepCopyStudents].filter(s => s.scores >= 100)
console.log('Задание 6')
console.log(bestStudents)

//6a Удальть трех студентов через splice

let topStudents = [...deepCopyStudents].splice(0, 3)
console.log('Задание 6a')
console.log(topStudents)

// 6b Объединить массивы через spread

let newDeepCopyStudents = [...deepCopyStudents, ...topStudents]
console.log('Задание 6b')
console.log(newDeepCopyStudents)

//7 Массив холостых через filter

let notMarriedStudents = deepCopyStudents.filter(s => !s.isMarried)
console.log('Задание 7')
console.log(notMarriedStudents)

//8 Массив имен map

let studentsNames = [...deepCopyStudents].map(s => s.name)
console.log('Задание 8')
console.log(studentsNames)

//8a Разделить studentsNames через ',' и ' ' через join

let namesWithComa = studentsNames.join(',')
let namesWithSpace = studentsNames.join(' ')
console.log('Задание 8a')
console.log(namesWithComa)
console.log(namesWithSpace)

//9 Создать всем свойство isStudent: true через map

let trueStudents = deepCopyStudents.map(s => ({...s, isStudent: true}))
console.log('Задание 9')
console.log(trueStudents)

//10 Nick женился через map

let studentsWithMarriedNick = deepCopyStudents.map(s => {
    if (s.name === 'Nick') {
        return {...s, isMarried: true}
    } else {
        return s
    }
})
console.log('Задание 10')
console.log(studentsWithMarriedNick)

//11 Найти Ann find

let ann = deepCopyStudents.find(s => s.name === 'Ann')
console.log('Задание 11')
console.log(ann)

//12 Найти самый большой score reduce

let bestStudent = deepCopyStudents.reduce((acc, cur) => acc.scores > cur.scores ? acc : cur)
console.log('Задание 12')
console.log(bestStudent)

//13 Сумма всех scores reduce

let scoreSum = deepCopyStudents.reduce((acc, cur) => acc + cur.scores, 0)
console.log('Задание 13')
console.log(scoreSum)

//14 Добавить в массив students к элементам массива массив friends с именами остальных студентов

const addFriends = (students) => {
    return students
        .map(s => ({...s, friends: students.map(s => s.name).filter(n => s.name !== n)}))
}
console.log('Задание 14')
console.log(addFriends(students))