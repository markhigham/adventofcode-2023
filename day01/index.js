const readline = require("node:readline");

function getDigit(word) {
    for (let i = 0; i < word.length; i++) {
        const num = Number(word[i])
        if (!isNaN(num)) {
            return num
        }
    }
}


const rl = readline.createInterface({
    input: process.stdin,
});

let sum = 0;

rl.on("line", (line) => {
    const first = getDigit(line);

    const reversed = line.split("").reverse().join("");
    const second = getDigit(reversed);

    const total = Number(`${first}${second}`);
    sum += total;
    console.log(first, second, total);
});

rl.on('close', () => {
    console.log(sum)
})