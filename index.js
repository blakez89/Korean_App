const vocab = [
	{
		hangul: '가다',
		romaji: 'gada',
		def: 'to go'
	},
	{
		hangul: '좋아하다',
		romaji: 'johahada',
		def: 'to like'
	},
	/* 	{
		hangul: '오다',
		romaji: 'oda',
		def: 'to come'
	}, */
	{
		hangul: '있다',
		romaji: 'itda',
		def: 'to have'
	},
	{
		hangul: '이다',
		romaji: 'ida',
		def: 'to be '
	},
	{
		hangul: '먹다',
		romaji: 'meokda',
		def: 'to eat'
	},
	{
		hangul: '마시다',
		romaji: 'masida',
		def: 'to drink'
	},
	{
		hangul: '주다',
		romaji: 'juda',
		def: 'to give'
	},
	{
		hangul: '보다',
		romaji: 'boda',
		def: 'to see'
	},
	{
		hangul: '자다',
		romaji: 'jada',
		def: 'to sleep'
	},
	{
		hangul: '일어나다',
		romaji: 'ireonada',
		def: 'to wake up or get up'
	},
	{
		hangul: '사다',
		romaji: 'sada',
		def: 'to buy'
	},
	{
		hangul: '쓰다',
		romaji: 'sseuda',
		def: 'to write or to use'
	},
	{
		hangul: '웃다',
		romaji: 'utda',
		def: 'to laugh'
	},
	{
		hangul: '울다',
		romaji: 'ulda',
		def: 'to cry'
	},
	{
		hangul: '입다',
		romaji: 'ipda',
		def: 'to wear'
	},
	{
		hangul: '걷다',
		romaji: 'geotda',
		def: 'to walk'
	},
	{
		hangul: '읽다',
		romaji: 'iktta',
		def: 'to read'
	},
	{
		hangul: '배우다',
		romaji: 'baeuda',
		def: 'to learn'
	},
	{
		hangul: '공부하다',
		romaji: 'gongbuhada',
		def: 'to study'
	},
	{
		hangul: '만나다',
		romaji: 'mannada',
		def: 'to meet'
	},
	{
		hangul: '좋다',
		romaji: 'jota',
		def: 'to be good'
	},
	{
		hangul: '싫다',
		romaji: 'silta',
		def: 'to be bad'
	},
	{
		hangul: '덥다',
		romaji: 'deopda',
		def: 'to be hot'
	},
	{
		hangul: '춥다',
		romaji: 'chupda',
		def: 'to be cold'
	},
	{
		hangul: '슬프다',
		romaji: 'seulpeuda',
		def: 'to be sad'
	},
	{
		hangul: '아프다',
		romaji: 'apeuda',
		def: 'to be sick or in pain'
	},
	{
		hangul: '피곤하다',
		romaji: 'pigonhada',
		def: 'to be tired'
	},
	{
		hangul: '재미있다',
		romaji: 'jaemiitda',
		def: 'to be interesting'
	},
	{
		hangul: '재미없다',
		romaji: 'jaemieopda',
		def: 'to be boring'
	},
	{
		hangul: '어렵다',
		romaji: 'eoryeopda',
		def: 'to be difficult'
	},
	{
		hangul: '쉽다',
		romaji: 'swipda',
		def: 'to be easy'
	},
	{
		hangul: '깨끗하다',
		romaji: 'kkaekkeuthada',
		def: 'to be clean'
	},
	{
		hangul: '더럽다',
		romaji: 'deoreopda',
		def: 'to be dirty'
	},
	{
		hangul: '빠르다',
		romaji: 'ppareuda',
		def: 'to be fast'
	},
	{
		hangul: '느리다',
		romaji: 'neurida',
		def: 'to be slow'
	}
];

const MODE_TYPES = {
	ASK_ENGLISH: { value: 0, text: 'Ask to type romaji from an English prompt' },
	ASK_KOREAN: { value: 1, text: 'Ask what a romanized Korean word means' }
};

let curIndex = 0;
let mode = MODE_TYPES.ASK_KOREAN;

function sortVocab() {
	vocab.sort(() => Math.random() - 0.5);
}


function changeMode() {
	if (mode.value === MODE_TYPES.ASK_ENGLISH.value) {
		mode = MODE_TYPES.ASK_KOREAN;
	} else {
		mode = MODE_TYPES.ASK_ENGLISH;
	}
	document.getElementById('mode').innerHTML = 'Mode: ' + mode.text;
	sortVocab();
	getQuestion();
}

function getQuestion() {
	if (mode.value === MODE_TYPES.ASK_KOREAN.value) {
		document.getElementById('question').innerHTML = `What does ${vocab[curIndex]['romaji']} (${vocab[curIndex]['hangul']}) mean?`;
	} else if (mode.value === MODE_TYPES.ASK_ENGLISH.value) {
		document.getElementById('question').innerHTML = `How do you say ${vocab[curIndex]['def']} in Romaji?`;
	} else {
	}
}

function processAskEnglish(userInput){
	let expectedValueKey = 'romaji';
	let statement = userInput === vocab[curIndex][expectedValueKey] ? 'Correct! ' : 'Incorrect... ';

	document.getElementById(
		'result'
	).innerHTML = `Previous Result: ${statement} ${vocab[curIndex]['def']} is ${vocab[curIndex]['romaji']} (${vocab[curIndex]['hangul']})`;

}

function processAskKorean(userInput){
	let expectedValueKey = 'def';
	let statement = userInput === vocab[curIndex][expectedValueKey] ? 'Correct! ' : 'Incorrect... ';

	document.getElementById(
		'result'
	).innerHTML = `Previous Result: ${statement} ${vocab[curIndex]['romaji']} (${vocab[curIndex]['hangul']}) means ${vocab[curIndex]['def']}`;

}

function processInput() {
	let userInput = document.getElementById('myText').value;
	userInput = userInput.toLowerCase();
	
	if(mode.value === MODE_TYPES.ASK_ENGLISH.value){
		processAskEnglish(userInput)
	}
	else {
		processAskKorean(userInput)
	}

	if (curIndex === vocab.length - 1) curIndex = -1;
	curIndex++;
	getQuestion();
	document.getElementById('myText').value = '';
}

document.getElementById('myText').addEventListener('keypress', function (e) {
	if (e.key === 'Enter') {
		processInput();
	}
});

document.getElementById('modechanger').onclick = changeMode;

sortVocab();
getQuestion();
