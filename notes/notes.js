const fs = require('fs');
const chalk = require('chalk');
const getNotes=() => {
    return "Your notes ....";
}
//read note by title
const readNote= (title) => {
    const notes=loadNotes();
    const readNote = notes.find(note => note.title===title);
    debugger
    if(readNote){
        console.log(chalk.yellow.inverse("note title: " + readNote.title));
        console.log("note body: " + readNote.body);
    }else{
        console.log("no note found");
    }
}
//list all notes
const listNotes=()=>{
    console.log(chalk.red.inverse('Your notes'));
    const notes=loadNotes();
    notes.forEach(note => {
        console.log(note.title);
    });
}
//remove note by title
const removeNote = (title) =>{
    const notes=loadNotes();
    const removeNote = notes.filter(note =>note.title===title);
    if(removeNote.length===1){
        console.log(removeNote[0].title);
        //delete notes by title
        var index = notes.indexOf(removeNote[0]);
        notes.splice(index,1);
        saveNotes(notes);
        console.log('note removed!');
    }else{
        console.log('note doesn\'t exist!');
    }
}
//add new note
const addNote = (title,body)=> {
const notes=loadNotes();
const duplicateNotes = notes.filter(note =>note.title===title);
if(duplicateNotes.length ===0){
    notes.push({
        title:title,
        body:body
    });
    saveNotes(notes);
    console.log("New note added");
}else{
    console.log("Note already exists");
}

}

const loadNotes=() => {
    try{
        const dataBuffer = fs.readFileSync("notes.json");
        const dataString = dataBuffer.toString();
        const dataJSON = JSON.parse(dataString);
        return dataJSON;
    }catch(err){
        return [];
    }
}

const saveNotes=(notes)=>{
    const notesJson = JSON.stringify(notes);
    fs.writeFileSync("notes.json",notesJson);
    
}
module.exports={
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}