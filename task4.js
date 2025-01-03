//Задание 4
console.log('Задание 4')

let a = 5,
    b = 10;

const interval = setInterval(function () {
	
	console.log(a)
	
	a++

	if (a>b){
		clearInterval(interval)
	}

}, 1000)