
//Задание 1
console.log('Задание 1')
let arr = [1,2,3,0, null, 'string']
let even = 0
let zero = 0
let odd = 0

function check_arr (arr) {

	for (item of arr){

		if (isNaN(item) || (item == null)) {
				continue;
			}
		if (item != 0)
		{
			if (item % 2 == 0){
				even+=1
			}
			else {
				odd +=1
			}
		}
		else {
			zero+=1
		}

	}
	
}

console.log(arr)
check_arr(arr)
console.log('Четных ', even)
console.log('Нечетных ', odd)
console.log('Нулей', zero)
/*
let n = 'y'
arr = []

even = 0
odd = 0
zero = 0


while (n=='y') {

	arr+=(prompt('Введите число для массива').split(' '))
	n = prompt('y - продолжаем? n - нет')

}

console.log(arr)
check_arr(arr)
console.log('Четных ', even)
console.log('Нечетных ', odd)
console.log('Нулей', zero)
*/


//Задание 2
function task2 (number) {
	if (number > 1000){
		alert('Нельзя больше 1т')
		n = new Number(prompt('Введите число не больше 1т'))
		return task2(n)
	}

	if (number <= 1){
		return false
	}

	for(var i = 2; i <= number; i++){
		if (number % i == 0 && i != number) {

			return false

		}

	}

	return true

}

n = prompt("Введите число для 2 задания")

console.log(task2(n))