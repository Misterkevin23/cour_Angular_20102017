let nom="kevin";

//syntaxe ES5
function hello(){
	console.log("hello " + nom);
}

//sythaxe ES6 (comprise par nodejs)
let obj ={
	ciao() {
		console.log("Ciao " + nom);
	}
}


hello();
obj.ciao();
