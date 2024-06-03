const fs= require('fs')
// const fs = require('node:fs');

// fs.writeFileSync("notes.txt", 'i am yasmen 2')


const Notes = require('./utils.js')
const chalk = require('chalk')
const yargs = require('yargs')
const command = process.argv[2]
yargs.version('1.0.0')
// console.log(process.argv)



// if(command === 'add'){
//     console.log('adding note')

// }else if(command === 'remove'){
//     console.log('removing note')

// }



//create add
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
    handler:function(argv){
        console.log('Title: '+ argv.title)
        console.log('Body: '+ argv.body)
    }
})


//create remove
yargs.command({
    command:'remove',
    describe:'remove a new note',
    handler:function(){
        console.log('removing a new note ')
    }
})


// create read
yargs.command({
    command:'read',
    describe:'read a new note',
    handler:function(){
        console.log('reading a new note ')
    }
})

// create list 

yargs.command({
    command:'list',
    describe:'list your notes',
    handler:function(){
        console.log('listing out all notes ')
    }
})


// add ,remove , read ,list 

// console.log(yargs.argv)
yargs.parse()




// read data and write on json file
// read data from json
const data=fs.readFileSync('json.json')
const originData=data.toString ()
const jsonData =JSON.parse(originData)


jsonData.name="yasmen"
jsonData.age=24

console.log(jsonData.name)


// overwrite on json data
const newData = JSON.stringify(jsonData)
fs.writeFileSync('json.json', newData)