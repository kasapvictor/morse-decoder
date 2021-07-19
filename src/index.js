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
};

function decode(expr) {
    const code = [ ...expr ];
    const codeArr = getCodeArr ( code );

    // перебираем весь массив codeArr
    // на каждой итерации получаем символ
    // объединяем все элементы через join()
    const phrase = codeArr.map ( item => {
        return getSymbol ( item );
    } ).join ( '' );

    // разбиваем код на слова
    // собираем массив с каждым словом - по 10 символов
    function getCodeArr ( code ) {
        const codeArr = [];
        for ( let i = 0; i < code.length; i += 10 ) {
            const part = code.slice ( i, i + 10 ).join ( '' );

            // обрезаем нули в начале каждого кода
            // и добавляем код(слово) в массив codeArr
            codeArr.push ( part.replace ( /^0+/, '' ) );
        }

        return codeArr;
    }

    // функция разбирает код и возвращает символ
    function getSymbol ( code ) {
        let out = '';
        const s1 = '.';
        const s2 = '-';
        const space = '**********';

        if ( code === space ) {
            return ' ';
        }

        for ( let i = 0; i < code.length; i += 2 ) {
            const part = [ ...code ].slice ( i, i + 2 ).join ( '' );

            if ( part === '10' ) {
                out += s1;
            } else {
                out += s2;
            }
        }

        console.log ( out )

        return MORSE_TABLE[`${ out }`];
    }

    return phrase;
}

module.exports = {
    decode
}
