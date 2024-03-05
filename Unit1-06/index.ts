/**
 * This program uses arrays to find the
 * mean, median, and mode.
 *
 * By: Flynn Rundquist
 * Since: 2024/03/04
 */

// get arguments
//
import { readFileSync } from 'fs'
//
//print proccess.argv
process.argv.forEach(function (val, index, array) {
})


const file = readFileSync(process.argv[2], 'utf8')

const newArray = file.split(/\r?\n/)
// pop last element, since its empty
newArray.pop()
console.log(newArray)

function calculateMean(arr: number[]): number {
        let sum = 0
        for (const arrayValues of arr) {
                sum += num
        }
        return sum / arr.length
}

function calculateMedian(arr: number[]): number {
        const sortedArry = arr.slice().sort((a.b) => a - b)
        const arrayLength = sortedArray.length
        if (arrayLength % 2 === 0) {
                return (sortedArray[length / 2 - 1] + sortedArray[length / 2]) / 2
        } else {
                return sortedArr[Math.floor(length / 2)]
        }
}

function calculateMode(arr: number[]): number {
        const frequencyMap: { [key: number]: number } = {}
        let maxFrequency = 0
        for (const arrayValues of arr) {
                frequencyMap[arrayValues] = (frequencyMap[arrayValues] || 0) + 1
                if (frequencyMap[arrayValues] > maxFrequency) {
                        maxFrequency = frequencyMap[arrayValues]
                }
        }
        const modes: number[] = []
        for (const arrayValue in frequencyMap) {
                if (frequencyMap[arrayValues] === maxFrequency) {
                        modes.push(parseInt(arrayValue)
                }
        }
        return modes
}
console.log("The mean is:", calculatedMean(numbers))
console.log("The median is:", calculatedMedian(numbers))
console.log("The mode is:" calculatedMode(numbers))
console.log("\nDone.")
