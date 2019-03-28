const yargs=require('yargs');
const notes = require('./notes.js');

yargs.version('1.1.0');
yargs.command({
    command:'add',
    describe:'add a new note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string',
        },
        body:{
            describe:'note body',
            demandOption:true,
            type:'string',
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body);
    }
});
yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string',
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
});
yargs.command({
    command:'list',
    describe:'list all notes',
    handler(){
        notes.listNotes();
    }
});
yargs.command({
    command:'read',
    describe:'read note by title',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string',
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
})
yargs.parse();
// console.log(yargs.argv);
