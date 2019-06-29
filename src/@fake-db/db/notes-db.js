// import moment from 'moment';
// import { isModuleSpecifier } from '@babel/types';
// import {FuseUtils} from '@fuse';
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const axios = require('axios');

//const notesDB = {
    // notes : [

    //     {
    //         "id"         : "5739d1fb46da846f60d70b2c",
    //         "title"      : "Todo",
    //         "description": "",
    //         "archive"    : false,
    //         "image"      : "",
    //         "time"       : "2019-06-29T10:00:00.000Z",
    //         "reminder"   : "2019-04-25T10:10:00.000Z",
    //         "checklist"  : [
    //             {
    //                 "id"     : "1",
    //                 "checked": false,
    //                 "text"   : "Present Final"
    //             },
    //             {
    //                 "id"     : "2",
    //                 "checked": true,
    //                 "text"   : "Feed the dog"
    //             }
    //         ],
    //         "labels"     : [
    //             "5725a6806acf030f9341e925"
    //         ]
    //     },


    // ],


    // labels: [
    //     {
    //         "id"    : "5725a6802d10e277a0f35739",
    //         "name"  : "Family",
    //         "handle": "family"
    //     },
    //     {
    //         "id"    : "5725a6809fdd915739187ed5",
    //         "name"  : "Work",
    //         "handle": "work"
    //     },
    //     {
    //         "id"    : "5725a68031fdbb1db2c1af47",
    //         "name"  : "Todos",
    //         "handle": "todos"
    //     },
    //     {
    //         "id"    : "5725a680606588342058356d",
    //         "name"  : "Prior",
    //         "handle": "prior"
    //     },
    //     {
    //         "id"    : "5725a6806acf030f9341e925",
    //         "name"  : "Personal",
    //         "handle": "personal"
    //     },
    //     {
    //         "id"    : "5725a6806acf030f9341e932",
    //         "name"  : "Friends",
    //         "handle": "friends"
    //     }
    // ]
//};

// let notesDB = new Schema({
//   id:{type: String},
//   description: {type: String},
//   image: {type: String},
//   time: { type: String,
//     default: moment.now()}

// })

// isModuleSpecifier.exports = mongoose.model('notesDB',notesDB)

// axios.get('/api/notes-app/notes')
// .then(response){
//     return [200, notesDB.notes];
// };

// axios.get('/api/notes-app/labels').then(response){
//     return [200, notesDB.labels];
// };

// axios.post('/api/notes-app/create-note').then(response){
//     const data = JSON.parse(request.data);
//     const newNote =
//         {
//             ...data.note,
//             id: FuseUtils.generateGUID()
//         };
//     notesDB.notes = [
//         newNote,
//         ...notesDB.notes
//     ];
//     return [200, newNote];
// };

// axios.post('/api/notes-app/update-note').then(response){
//     const data = JSON.parse(request.data);

//     notesDB.notes = notesDB.notes.map((note) => {
//         if ( data.note.id === note.id )
//         {
//             return data.note
//         }
//         return note
//     });

//     return [200, data.note];
// });

// axios.post('/api/notes-app/update-labels').then(response){
//     const data = JSON.parse(request.data);

//     notesDB.labels = data.labels;

//     return [200, notesDB.labels];
// });

// axios.delete('/api/notes-app/remove-note').then(response){
//     const data = JSON.parse(request.data);

//     notesDB.notes = notesDB.notes.filter((note) => data.noteId !== note.id);

//     return [200, notesDB.notes];
// });

