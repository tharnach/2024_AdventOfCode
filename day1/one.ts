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

const differenceArray = new Array(leftArray.length).fill(0);
leftArray.map((value, index) => {
    differenceArray.push(Math.abs(value - rightArray[index]))
})
const sum = differenceArray.reduce((acc, curr) => acc + curr)

console.log(chalk.greenBright.bold(sum))