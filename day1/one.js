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

const differenceArray = new Array(leftArray.length).fill(0);
leftArray.map((value, index) => {
    differenceArray.push(Math.abs(value - rightArray[index]))
})
const sum = differenceArray.reduce((acc, curr) => acc + curr)

console.log(chalk.greenBright.bold(sum))