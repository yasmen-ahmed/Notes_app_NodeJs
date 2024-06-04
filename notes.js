const fs = require('fs')
const chalk = require('chalk')


const addNote = function(title,body){
   const notes = loadNotes()


const duplicateNotes = notes.filter(
    function(note){
        return note.title===title
    }
)

if(duplicateNotes.length === 0){
    notes.push({
        title:title,
        body:body
       })
       savaNotes(notes)
          console.log(chalk.green("new note added"))
    
}
else{
    console.log("Note title taken")
}


}


const savaNotes = function(notes){
const newData = JSON.stringify(notes)
fs.writeFileSync("notes.json", newData)
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJson = dataBuffer.toString();
        const data = JSON.parse(dataJson);
        return data;
    } catch (e) {
        return [];
    }
}


// remove function

const removeNote = function(title) {
    const notes = loadNotes()
    const keepNotes = notes.filter(
        function(note){
            return note.title !==title
        }
    )
    
    if(notes.length > keepNotes.length){
      
           savaNotes(notes)
        console.log("note removed")
        
    }
    else{
        console.log(chalk.red("Note not found"))
    }
    // console.log( keepNotes.length)
}


module.exports = {

    addNote:addNote,
    removeNote:removeNote

} 