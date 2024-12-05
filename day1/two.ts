import chalk from 'chalk';

const path = "day1/input.txt";
const file = Bun.file(path);
const text = await file.text();
const lineArray = text.split("\n");

const leftArray: number[] = [];
const rightArray: number[] = [];


lineArray
    .map((line) => {
        const [left, right] = line.split('   ');
        leftArray.push(parseInt(left, 10));
        rightArray.push(parseInt(right, 10));
    })

leftArray.sort();
rightArray.sort();

const similarityArray: number[] = [];
leftArray.map((value) => {
    const occurences = rightArray.filter((arrayItem) => arrayItem === value).length;
    similarityArray.push(occurences * value)
})

const sum = similarityArray.reduce((acc, curr) => acc + curr)

console.log(chalk.greenBright.bold(sum))