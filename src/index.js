const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ': ' ',
};



function decode(expr) {
    let arrWord = [];
    let arrSimbol = [];
    let arrSimbolSecond = [];
    let res = [];
    for (let i = 0; i < expr.length; i += 10) {
        arrWord.push(expr.substr(i, 10))
    }
    for (let j = 0; j < arrWord.length; j++) {
        for (let k = 0; k < 10; k += 2) {
            if (arrWord[j].substr(k, 2) === "10") {
                arrSimbol.push('.');
            }
            else if (arrWord[j].substr(k, 2) === "11") {
                arrSimbol.push('-');
            }
            else if (arrWord[j].substr(k, 10) === "**********") {
                arrSimbol.push(' ');
            }
        }
        arrSimbol.push(','); 
    }
    arrSimbol = arrSimbol.join('').split(',')
    
    for (let l = 0; l < arrSimbol.length; l++) {
        for (let key in MORSE_TABLE) {  
            if (arrSimbol[l] === key) {
                res.push(MORSE_TABLE[key])
            };
        };
    };
   
    return res.join('')
}


module.exports = {
    decode
}
