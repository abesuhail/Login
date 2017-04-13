//How to use Length

// var pokemonArray = ['pikachu', 'squirtle', 'charmander']
// console.log(pokemonArray.length)
// for (i = 0; i < pokemonArray.length; i++) {
// 	console.log(pokemonArray[i])
// }

//How to use Reverse

// var pokemonArray = ['pikachu', 'squirtle', 'charmander']
// console.log(pokemonArray.reverse())

// How to use .sort with strings and numbers

// var pokemonArray = ['pikachu', 'squirtle', 'charmander']
// var numberArray = [9, 33, 87, 140, 50]

// console.log(pokemonArray.sort())
// console.log(numberArray.sort())

//How to use .push(), .pop(), .shift(), and .unshift()

// var pokemonArray = ['pikachu', 'squirtle', 'charmander']

// pokemonArray.push("snorlax")
// console.log(pokemonArray) 

// pokemonArray.pop()
// console.log(pokemonArray)

// pokemonArray.unshift("meowth")
// console.log(pokemonArray)
var accounts = [
	{
		username: "asuhail",
		password: "welcome"
	},
	{
		username:"bmuniz",
		password: "welcome"

	},
	{
		username:"admin",
		password: "password"	
	}	
]
function getInfo(){

var usernameInput = document.getElementById('username').value
var passwordInput =document.getElementById('password').value

for (var i = 0; i < accounts.length; i++) {
	if(accounts[i].username == usernameInput && accounts[i].password == passwordInput){
		console.log("logged in!")
		return
	}
}
console.log("log in failed")
}

function registerUser(){
	var registerUser = document.getElementById('newUser').value
	var registerPassword =document.getElementById('newPassword').value
	var newUser = {
		username: registerUser,
		password: registerPassword
	}

	for (i = 0; i < accounts.length; i++) {
		if(registerUser ==accounts[i].username){
			alert("that username is already in use, please choose another")
			return
		}else if (registerPassword.length < 5 ){
			alert("that password is too short, include 5 or more characters")
			return
		}
	}
	accounts.push(newUser)
	console.log(accounts)
}
