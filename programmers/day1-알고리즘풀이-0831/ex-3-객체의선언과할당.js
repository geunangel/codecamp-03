//008. 객체의 선언과 할당
let student = {};

//첫번째 방법 - 미리 선언을 하고 나중에 할당
student.name = "철수"
//"철수"
console.log(student)
//{name: "철수"}

//두번째 방법 - 선언과 동시에 할당
let student = {
	name : "철수"
};
console.log(student)
//{name: "철수"}
