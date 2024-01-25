let numOrStr = prompt('Input natural number');
console.log(numOrStr);

// switch (numOrStr) {
//     case '':
//         console.log('Empty string.');
//         break;
//     case null:
//         console.log('Canceled.');
//         break;
//     default:
//         if (isNaN(numOrStr)) {
//             console.log('Not a Number!');
//         } else {
//             console.log('OK!')
//         }
// }

switch (isNaN(+numOrStr)) {
    case true:
        console.log('Not a Number!');
        break;
    default:
        switch (numOrStr) {
            case null:
                console.log('Canceled.');
                break;
            case '':
                console.log('Empty string.');
                break;
            default:
                console.log('OK!');
        }
}
