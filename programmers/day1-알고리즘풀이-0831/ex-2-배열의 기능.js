//004. 배열의 기능
let fruits = ["사과", "바나나", "파인애플"]
let newFruits = []

//첫번째 방법
fruits.length //3
newFruits.push(fruits.pop()) //1
console.log(newFruits)
//["파인애플"]

//두번쨰 방법
fruits.length //3
newFruits.push(fruits[fruits.length-1]) //1
console.log(newFruits)
//["파인애플"]

//세번째 방법
fruits[3]
fruits[fruits.length]
fruits[fruits.length-1]

const lastData= fruits[fruits.length-1]
newfruits.push(lastData)


//005. 배열의 기능
let students = ["철수", "영희", "훈이", "짱구", "유리"]

let newArr = students.slice(0,3)

console.log(newArr)
//["철수", "영희", "훈이"]


//006. 배열의 기능
let fruits = ["사과", "바나나"]

fruits[0] = "맛있는 사과"
//"맛있는 사과"
fruits[1] = "맛있는 바나나"
//"맛있는 바나나"

console.log(fruits)
//["맛있는 사과", "맛있는 바나나"]


//007. 문자열 배열
const number = "01012345678"

const num1 = number.substr(0,3)
//"010"
const num2 = number.substr(3,4)
//"1234"
const num3 = number.substr(7,4)
//"5678"

const arr = [num1,num2,num3]

console.log(arr)
//["010", "1234", "5678"]
