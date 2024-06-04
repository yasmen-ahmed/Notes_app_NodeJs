const fs= require('fs')
// const fs = require('node:fs');
const Notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')
const { title, argv } = require('process')
const { type } = require('os')
const command = process.argv[2]
yargs.version('1.0.0')


// add
yargs.command({
    command:'add',
    describe:'add a new note',
    builder:{
        title:{
            describe: 'note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe: 'body note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        // console.log('Title: '+ argv.title)
        // console.log('Body: '+ argv.body)
        Notes.addNote(argv.title,argv.body)
    }
})


//create remove
yargs.command({
    command:'remove',
    describe:'remove a new note',
    builder:{
        title:{
            describe:"remove note",
           demandOption:true,
           type:"string"
        }
    },
    handler(argv){
        // console.log('removing a new note ')
        Notes.removeNote(argv.title)
    }
})


// create read
yargs.command({
    command:'read',
    describe:'read a new note',
    handler(){
        console.log('reading a new note ')
    }
})

// create list 

yargs.command({
    command:'list',
    describe:'list your notes',
    handler(){
        Notes.listNotes()
    }
})

yargs.parse()




// read data and write on json file
// read data from json
// const data=fs.readFileSync('json.json')
// const originData=data.toString ()
// const jsonData =JSON.parse(originData)


// jsonData.name="yasmen"
// jsonData.age=24

// console.log(jsonData.name)


// // overwrite on json data
// const newData = JSON.stringify(jsonData)
// fs.writeFileSync('json.json', newData)