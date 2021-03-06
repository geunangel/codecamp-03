//009. 객체의 키&값 추가
const student = {
	name: "철수",
	age: 8,
};

const school = {
	name: "다람쥐초등학교",
	teacher: "다람이",
}

student.school = school

console.log(student)
//{name: "철수", age: 8, school: {…}}age: 8name: "철수"school: {name: "다람쥐초등학교", teacher: "다람이"}


//010. 객체의 키&값 삭제
let student = {
	name: "철수",
	age: 8,
	drink: "사이다"
};

delete(student.drink)
console.log(student)
//{name: "철수", age: 8}

delete(student.age)
console.log(student)
//{name: "철수"}


//011. 객체와 배열의 값
const classmates = [
	{
		name: "철수",
		age: 8,
		school: "다람쥐초등학교"
	},
	{
		name: "영희",
		age: 8,
		school: "토끼초등학교"
	},
	{
		name: "짱구",
		age: 8,
		school: "다람쥐초등학교"
	}
];

classmates[1]
//{name: "영희", age: 8, school: "토끼초등학교"}

classmates[1].school="다람쥐초등학교"
//"다람쥐초등학교"

console.log(classmates)
//{name: "철수", age: 8, school: "다람쥐초등학교"}
//{name: "영희", age: 8, school: "다람쥐초등학교"}
//{name: "짱구", age: 8, school: "다람쥐초등학교"}