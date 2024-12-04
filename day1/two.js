import fs from 'fs'
import chalk from 'chalk';

const lineArray = fs.readFileSync('./input.txt')
    .toString()
    .split("\n");

const leftArray = [];
const rightArray = [];


lineArray
    .map((line) => {
        const [left, right] = line.split('   ');
        leftArray.push(parseInt(left, 10));
        rightArray.push(parseInt(right, 10));
    })

leftArray.sort();
rightArray.sort();

let similarityArray = [];
leftArray.map((value) => {
    const occurences = rightArray.filter((arrayItem) => arrayItem === value).length;
    similarityArray.push(occurences * value)
})

const sum = similarityArray.reduce((acc, curr) => acc + curr)

console.log(chalk.greenBright.bold(sum))