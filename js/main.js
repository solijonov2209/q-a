let elText = document.querySelector('.question');
let elInput = document.querySelector('.input');
let questions = [
	{
		text: '1. JavaScriptda nechta error bor',
		correctAnswer: '3',
	},
	{
		text: '2. Javascriptda nechxil ozgaruvchi bor? (masalan Var ..)',
    correctAnswer: '3',
	},
	{
		text: "3. console.log(typeof 20), natija qanday boladi?",
    correctAnswer: 'number',
	},
	{
		text: '4. Arrayni nechxil usulda ochsa boladi ?',
    correctAnswer: '2',
	},
	{
		text: '5. Javascript qanday kengaytma bilan saqlanadi  ?',
    correctAnswer: '.js',
	},
  {
		text: '6. let ecmascriptni qaysi versiyasida qoshilgan   ?',
    correctAnswer: 'ES6',
	},
  {
		text: '7. Javascript qanday kengaytma bilan saqlanadi  ?',
    correctAnswer: '.js',
	},
  {
		text: '8. alert( 5 % 2 ) Natiani toping ?',
    correctAnswer: '1',
	},
  {
		text: '9. obyekt da key va value birgalikda nima deb ataladi ?',
    correctAnswer: 'property',
	},
  {
		text: '10. generator funksiyani yasash uchun qaysi belgi qoyiladi?',
    correctAnswer: '*',
	},
 
];

function* generator(array) {
  let count = 0;
	for (let i = 0; i < array.length; i++) {
		let res = yield (elText.textContent = array[i].text);
		array[i].answer = res;
    if(res==array[i].correctAnswer){
      count++
    }
    console.log(res);
	}
alert( `siz ${count} ta savolga tog'ri javob topdingiz. Shubhangiz bo'lsa consoldan tekshiring.`) 
}


let gen = generator(questions);
gen.next();
elInput.addEventListener('keyup', function (evt) {
	if (evt.keyCode == '13') {
		let inputValue = evt.target.value;
		if (gen.next(inputValue).done) {
			alert('Tugadi!');
      
			console.table(questions);
		}
		evt.target.value = '';
	}
});


  