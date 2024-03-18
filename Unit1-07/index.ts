/**
 * This program reads a text file of students and a text file of assignments, 
 * and then reads the contents of the files and randomly generate marks
 * with a mean of 75 and a standard deviation of 10, and passes them 
 * back as a 2D array of strings in a file called "marks.csv".
 *
 * By: Flynn Rundquist
 * Version: 1.0
 * Since: 2024/03/18
 */

import * as fs from 'fs';

try {
    // Read files and split contents
    const names = fs.readFileSync('./student-names.txt', 'utf-8')
    const namesArr = names.trim().split(/\r?\n/)
    const assignments = fs.readFileSync('./assignments.txt', 'utf-8').split('\n')
    const contentsArr = contents.map(x => x.split(','))

    // Generate marks for assignments

