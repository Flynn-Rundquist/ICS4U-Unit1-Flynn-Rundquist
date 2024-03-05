/**
 * This program uses arrays to find the
 * mean, median, and mode.
 *
 * By: Flynn Rundquist
 * Since: 2024/03/04
 */

// get arguments
//
import { readFileSync } from 'fs';
//print process.argv
proccess.argv.forEach(function (val, index, array) {
})

const file = readFileSynce(proccess.argv[2], 'utf8')

const newArray = file.split(/\r?\n/)
newArray.pop()
console.log(newArray)

// Read file and split contents into array
const fileContents = readFileSync(process.argv[2], 'utf8');
const newArray = fileContents.trim().split(/\r?\n/);

// Define functions to calculate mean, median, and mode
function calculateMean(arr: number[]): number {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum / arr.length;
}

function calculateMedian(arr: number[]): number {
    const sortedArray = arr.slice().sort((a, b) => a - b);
    const length = sortedArray.length;
    if (length % 2 === 0) {
        return (sortedArray[length / 2 - 1] + sortedArray[length / 2]) / 2;
    } else {
        return sortedArray[Math.floor(length / 2)];
    }
}

function calculateMode(arr: number[]): number[] {
    const frequencyMap: { [key: number]: number } = {};
    let maxFrequency = 0;
    for (const num of arr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        if (frequencyMap[num] > maxFrequency) {
            maxFrequency = frequencyMap[num];
        }
    }
    const modes: number[] = [];
    for (const num in frequencyMap) {
        if (frequencyMap[num] === maxFrequency) {
            modes.push(parseInt(num));
        }
    }
    return modes;
}

// Calculate mean, median, and mode
const mean = calculateMean(newArray.map(Number));
const median = calculateMedian(newArray.map(Number));
const mode = calculateMode(newArray.map(Number));

// Output results
console.log("The mean is:", mean);
console.log("The median is:", median);
console.log("The mode is:", mode);
console.log("\nDone.");
