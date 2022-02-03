const primaryVocab = [
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
	{
		hangul: '오다',
		romaji: 'oda',
		def: 'to come'
	},
	{
		hangul: '있다',
		romaji: 'itda',
		def: 'to have'
	},
	{
		hangul: '이다',
		romaji: 'ida',
		def: 'to be'
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
/* 	{
		hangul: '쓰다',
		romaji: 'sseuda',
		def: 'to write or to use'
	}, */
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
		hangul: '행복하다',
		romaji: 'haengboghada',
		def: 'to be happy'
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
/* 	{
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
		hangul: '더럽다',
		romaji: 'deoreopda',
		def: 'to be dirty'
	}, */
	{
		hangul: '빠르다',
		romaji: 'ppareuda',
		def: 'to be fast'
	},
	{
		hangul: '느리다',
		romaji: 'neurida',
		def: 'to be slow'
	},
	{
		hangul: '예쁘다',
		romaji: 'yeppeuda',
		def: 'to be pretty'
	},
	{
		hangul: '똑똑하다',
		romaji: 'ttokttokhada',
		def: 'to be smart'
	},
	{
		hangul: '사다',
		romaji: 'sada',
		def: 'to buy'
	},
	{
		hangul: '공부하다',
		romaji: 'gongbuhada',
		def: 'to study'
	},
	{
		hangul: '깨끗하다',
		romaji: 'kkaekkeuthada',
		def: 'to be clean'
	},
	{
		hangul: '사랑하다',
		romaji: 'salanghada',
		def: 'to love'
	},
	{
		hangul: '놀다',
		romaji: 'nolda',
		def: 'to play'
	},
	{
		hangul: '만들다',
		romaji: 'mandeulda',
		def: 'to make'
	},
	{
		hangul: '작다',
		romaji: 'jagda',
		def: 'to be small'
	},
	{
		hangul: '크다',
		romaji: 'keuda',
		def: 'to be big'
	}
];

const nounVocab = [
	{
		hangul: '오늘',
		romaji: 'oneul',
		def: 'today'
	},
	{
		hangul: '내일',
		romaji: 'naeil',
		def: 'tomorrow'
	},
	{
		hangul: '어제',
		romaji: 'eoje',
		def: 'yesterday'
	},
	{
		hangul: '여기',
		romaji: 'yeogi',
		def: 'here'
	},
	{
		hangul: '거기',
		romaji: 'geogi',
		def: 'there'
	},
	{
		hangul: '날씨',
		romaji: 'nalssi',
		def: 'weather'
	},
	{
		hangul: '책',
		romaji: 'chaeg',
		def: 'book'
	},
	{
		hangul: '자동차',
		romaji: 'jadongcha',
		def: 'car'
	},	
	{ hangul: '몸', romaji: 'mom', def: 'body' },
	{ hangul: '배', romaji: 'bae', def: 'stomach' },
	{ hangul: '등', romaji: 'deung', def: 'back' },
	{ hangul: '가슴', romaji: 'gaseum', def: 'chest' },
	{ hangul: '이름', romaji: 'ileum', def: 'name' },
	{ hangul: '도시', romaji: 'dosi', def: 'city' },
	{ hangul: '셔츠', romaji: 'syeocheu', def: 'shirt' },
	{ hangul: '바지', romaji: 'baji', def: 'pants' },
		

];

const miscVocab = [
	{ hangul: '아주', romaji: 'aju', def: 'very' },
	{ hangul: '자주', romaji: 'jaju', def: 'frequently' },
	{ hangul: '정말', romaji: 'jeongmal', def: 'really' },
	{ hangul: '조금', romaji: 'jogeum', def: 'a little' },
/* 	{ hangul: '꽤', romaji: 'kkwae', def: 'quite' },
	{ hangul: '상당히', romaji: 'sangdanghi', def: 'quite' }, */
	{ hangul: '거의', romaji: 'geoui', def: 'almost' },
	{ hangul: '빨리', romaji: 'ppalli', def: 'fast' },
	{ hangul: '천천히', romaji: 'cheoncheonhi', def: 'slowly' },
	{ hangul: '신중하게', romaji: 'sinjunghage', def: 'carefully' },
	{ hangul: '항상', romaji: 'hangsang', def: 'always' },
	// { hangul: '늘', romaji: 'neul', def: 'always' },
	{ hangul: '보통', romaji: 'botong', def: 'usually' },
	{ hangul: '때로는', romaji: 'ttaeroneun', def: 'sometimes' },
	// { hangul: '가끔', romaji: 'gakkeum', def: 'occasionally' },
/* 	{ hangul: '좀처럼', romaji: 'jomcheoreom', def: 'seldom' },
	{ hangul: '드물게', romaji: 'deumulge', def: 'rarely' }, */
	{ hangul: '절대', romaji: 'jeoldae', def: 'never' },
	{ hangul: '만나서 반가워요', romaji: 'Mannaseo bangawoeyo', def: 'nice to meet you' },
	{ hangul: '어떻게 지내세요?', romaji: 'Eotteoke jinaeseyo? ', def: 'how are you?' },
	{ hangul: '잘 지내요 ', romaji: 'Jal jinaeyo', def: "im great" },
	{ hangul: '저는 커피를 마시어요', romaji: 'naneun keopileul masieoyo', def: 'i drink coffee' },
	{ hangul: '나는 여기에 자주 오요', romaji: 'naneun yeogie jaju oyo', def: 'i come here often' }
]

const vocab = [...primaryVocab,...nounVocab,...miscVocab]

function randomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const MODE_TYPES = {
	ASK_ENGLISH: { value: 0, text: 'Ask to type romaji from an English prompt' },
	ASK_KOREAN: { value: 1, text: 'Ask what a romanized Korean word means' }
};

let curIndex = randomInteger(0, vocab.length - 1);
let mode = MODE_TYPES.ASK_KOREAN;
let allAnswered = false;
let showRomaji = true;

function sortVocab() {
	vocab.sort(() => Math.random() - 0.5);
}

function changeShowRomaji() {
	showRomaji = !showRomaji;
	document.getElementById('romajichanger').innerHTML = showRomaji ? 'Hide Romaji' : 'Show Romaji'
	getQuestion();
}

function changeMode() {
	if (mode.value === MODE_TYPES.ASK_ENGLISH.value) {
		// switch to korean
		document.getElementById('romajichanger').style.display = 'block';
		mode = MODE_TYPES.ASK_KOREAN;
	} else {
		// switch to ask english
		document.getElementById('romajichanger').style.display = 'none';
		mode = MODE_TYPES.ASK_ENGLISH;
	}
	document.getElementById('mode').innerHTML = 'Mode: ' + mode.text;
	sortVocab();
	getQuestion();
}

function getQuestion() {
	if (mode.value === MODE_TYPES.ASK_KOREAN.value) {
		document.getElementById('question').innerHTML = `What does ${showRomaji ? vocab[curIndex]['romaji'] : ''} (${vocab[curIndex]['hangul']}) mean?`;
	} else if (mode.value === MODE_TYPES.ASK_ENGLISH.value) {
		document.getElementById('question').innerHTML = `How do you say ${vocab[curIndex]['def']} in Romaji?`;
	} else {
	}
}

function processAskEnglish(userInput) {
	let expectedValueKey = 'romaji';
	let result = userInput === vocab[curIndex][expectedValueKey];
	let statement = result ? 'Correct! ' : 'Incorrect... ';

	document.getElementById(
		'result'
	).innerHTML = `Previous Result: ${statement} ${vocab[curIndex]['def']} is ${vocab[curIndex]['romaji']} (${vocab[curIndex]['hangul']})`;

	return result;
}

function processAskKorean(userInput) {
	let expectedValueKey = 'def';
	let result = userInput === vocab[curIndex][expectedValueKey];
	let statement = result ? 'Correct! ' : 'Incorrect... ';

	document.getElementById(
		'result'
	).innerHTML = `Previous Result: ${statement} ${showRomaji ? vocab[curIndex]['romaji'] : ''} (${vocab[curIndex]['hangul']}) means ${vocab[curIndex]['def']}`;

	return result;
}

function processInput() {
	let userInput = document.getElementById('myText').value;
	let answeredCorrect = false;
	userInput = userInput.toLowerCase();

	if (mode.value === MODE_TYPES.ASK_ENGLISH.value) {
		answeredCorrect = processAskEnglish(userInput);
	} else {
		answeredCorrect = processAskKorean(userInput);
	}

	if (answeredCorrect) vocab.splice(curIndex, 1);

	curIndex = randomInteger(0, vocab.length - 1);
	if (vocab.length < 1) allAnswered = true;

	if (!allAnswered) {
		getQuestion();
		document.getElementById('myText').value = '';
	} else {
		document.getElementById('question').innerHTML = `You have answered all the questions!`;
	}
}

document.getElementById('myText').addEventListener('keypress', function (e) {
	if (e.key === 'Enter' && !allAnswered) {
		processInput();
	}
});

document.getElementById('modechanger').onclick = changeMode;
document.getElementById('romajichanger').onclick = changeShowRomaji;
sortVocab();
getQuestion();
