const fs = require('fs')

const vocab = `아주
aju
very
자주
jaju
frequently
정말
jeongmal
really
조금
jogeum
a little
꽤
kkwae
quite
상당히
sangdanghi
quite
거의
geoui
almost
빨리
ppalli
fast
천천히
cheoncheonhi
slowly
신중하게
sinjunghage
carefully
항상
hangsang
always
늘
neul
always
보통
botong
usually
때로는
ttaeroneun
sometimes
가끔
gakkeum
occasionally
좀처럼
jomcheoreom
seldom
드물게
deumulge
rarely
절대
jeoldae
never
만나서 반가워요
Mannaseo bangawoeyo
Nice to meet you
어떻게 지내세요?
Eotteoke jinaeseyo? 
How are you?
잘 지내요 
Jal jinaeyo
I'm great
저는 커피를 마시어요
naneun keopileul masieoyo
I drink coffee
나는 여기에 자주 오요
naneun yeogie jaju oyo
I come here often`

let array = vocab.split('\n');
let words = []

for (let index = 0; index < array.length - 2; index = index + 3) {
	
	const obj = {};
	obj.hangul = array[index]
	obj.romaji = array[index + 1]
	obj.def = array[index + 2]
	words.push(obj)
	
}

fs.writeFile('./output.js', JSON.stringify(words), { flag: 'a+' }, err => {})