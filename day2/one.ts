import chalk from 'chalk';

const path = "day2/input.txt";
// const path = "day2/example.txt";
const file = Bun.file(path);
const text = await file.text();
const lineArray = text.split("\n");

let safeReports = 0;
const reports = lineArray.map((line) => line.split(" "));
const results = reports.map((report, index) => {
    console.log(chalk.green.bold(`${index}: ${report}`));
    
    // check for any duplicates
    const reportSet = new Set(report);
    if (reportSet.size !== report.length) {
        console.log(chalk.red.bold(`${index} has duplicates`));
        return false;
    }
    // check only increasing to decreasing
    const sorted = report.toSorted((a, b) => parseInt(a) - parseInt(b));

    if (JSON.stringify(sorted) !== JSON.stringify(report) && JSON.stringify(sorted) !== JSON.stringify(report.toReversed())) {
        console.log(chalk.red.bold(`${index} goes up and down`));
        return false;
    }

    // check difference is no greater than 3
    const diffResult = report.reduce((prev, curr, index) => {
        const currNum = parseInt(curr);
        if (index === 0) {
            return currNum;
        }
        if (Math.abs(currNum - prev) > 3) {
            return -5; // breaks the remainder of the reduce and will return -5
        }
        return currNum;
    }, 0);

    if (diffResult === -5) {
        console.log(chalk.red.bold(`${index} has a diff greater than 3`));
        return false;
    };

    return true;
});


console.log(chalk.cyan.bold(results.filter((result) => result === true).length));