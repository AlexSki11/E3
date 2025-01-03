
//Задание 1
console.log('Задание 1')
let arr = [1,2,3,0, null, 'string']
let even = 0
let zero = 0
let odd = 0

function check_number (arr) {

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

check_number(arr)

console.log('Четных ', even)
console.log('Нечетных ', odd)
console.log('Нулей', zero)

//Задание 2
