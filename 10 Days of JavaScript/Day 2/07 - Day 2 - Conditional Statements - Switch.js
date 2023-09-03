// ========================
//       Information
// ========================

// Direct Link: https://www.hackerrank.com/challenges/js10-switch/problem
// Difficulty: Easy
// Max Score: 10
// Language: JavaScript (Node.js)

// ========================
//         Solution
// ========================

function getLetter(s) {
    let letter;
    // Write your code here
    switch(s.charAt(0)){
        case 'a':
    case 'e':
    case 'o':
    case 'i':
    case 'u':
        letter = 'A';
        break;
    case 'b':
    case 'c':
    case 'd':
    case 'f':
    case 'g':
        letter = 'B';
        break;
    case 'h':
    case 'j':
    case 'k':
    case 'l':
    case 'm':
        letter = 'C';
        break;
    default:
        letter = 'D'
    }
    return letter;
}

function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}
