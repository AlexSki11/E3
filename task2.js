//Задание 2
function task2 (number) {
	/*
	if (number > 1000){
		alert('Нельзя больше 1т')
		n = new Number(prompt('Введите число не больше 1т'))
		return task2(n)
	}
	*/
	if (number <= 1 || number>1000){
		return 'Неверно'
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