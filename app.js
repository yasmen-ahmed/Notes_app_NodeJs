// const fs= require('fs')
// const fs = require('node:fs');

// fs.writeFileSync("notes.txt", 'i am yasmen 2')


// append method
// const fs = require('node:fs');

// try {
//   fs.appendFileSync('notes.txt', 'data to append');
//   console.log('The "data to append" was appended to file!');
// } catch (err) {
//     console.log('error!');
// } 


// ///
// const Notes = require('./utils.js')
// // const name="Ali"

// // const sum =add(4,2)
// console.log(Notes())


// ///////node package /////
// const validator = require('validator')
// console.log(validator.isEmail("alo@a"))
// console.log(validator.isURL("https://www.udemy.com/home/my-courses/learning/?q=node"))


const chalk = require('chalk')
console.log(chalk.green('success!'));
console.log(chalk.blue.bold('error!'));
