function emphasize(strings, ...values) {
    let result = strings.reduce((acc, string, index) => {
        const value = values[index] ? `<em>${values[index]}</em>` : '';
        return acc + string + value;
    }, '');
    result = result.replace(/важливо/g, '<strong>важливо</strong>');

    return result;
}

const importantWord = "важливо";
const name = "Bob"
const message = emphasize`Привіт ${name} це ${importantWord}, візьми слухавку!`
console.log(message);



