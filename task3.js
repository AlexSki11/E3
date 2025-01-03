//Задание 3

function task3 (number) {
	
	return function (number2) {
		return number + number2
	}

}

const sumTask3 = task3(10)

const sumNumber = sumTask3(20)
console.log(sumNumber)