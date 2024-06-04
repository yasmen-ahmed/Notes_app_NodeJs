const fs = require('fs')
const chalk = require('chalk')

//  add note
const addNote = (title,body) => {
   const notes = loadNotes()


    const duplicateNotes = notes.filter(
          (note)=> note.title===title )

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


// load note 
const loadNotes = () => {
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

const removeNote = (title) => {
    const notes = loadNotes()
    const keepNotes = notes.filter((note)=> note.title !==title)
    
    if(notes.length > keepNotes.length){
      
           savaNotes(notes)
        console.log("note removed")
        
    }
    else{
        console.log(chalk.red("Note not found"))
    }
    // console.log( keepNotes.length)
}


// list notes

const listNotes = ()=>{
    const showAllNotes = loadNotes()

    if(showAllNotes.length != 0){
      
    showAllNotes.forEach((showAllNote) => {
        console.log(showAllNote.title)
        
    });
    // console.log(showAllNote.title[0])
  
     
 }
 else{
     console.log(chalk.red(" Not Notes"))
 }
   

}
// save note
const savaNotes = (notes)=>{
    const newData = JSON.stringify(notes)
    fs.writeFileSync("notes.json", newData)
}

module.exports = {

    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes
    

} 