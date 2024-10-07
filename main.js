function highlight(strings, ...values) {
    return strings.reduce((result, string, index) => {
      const value = values[index] ? `<strong>${values[index]}</strong>` : '';
      return result + string + value;
    }, '');
  }

const name = "Bob";
const place = "Hogwarts";
const message = highlight`Привіт ${name}! Ласкаво просимо в ${place}`;
console.log(message);
