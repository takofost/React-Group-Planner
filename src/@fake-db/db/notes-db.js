import mock from './../mock';
import {FuseUtils} from '@fuse';

const notesDB = {
    notes : [
        
    ],
    labels: [
        {
            "id"    : "5725a6802d10e277a0f35739",
            "name"  : "Family",
            "handle": "family"
        },
        {
            "id"    : "5725a6809fdd915739187ed5",
            "name"  : "Work",
            "handle": "work"
        },
        {
            "id"    : "5725a68031fdbb1db2c1af47",
            "name"  : "Todos",
            "handle": "todos"
        },
        {
            "id"    : "5725a680606588342058356d",
            "name"  : "Prior",
            "handle": "prior"
        },
        {
            "id"    : "5725a6806acf030f9341e925",
            "name"  : "Personal",
            "handle": "personal"
        },
        {
            "id"    : "5725a6806acf030f9341e932",
            "name"  : "Friends",
            "handle": "friends"
        }
    ]
};

mock.onGet('/api/notes-app/notes').reply((config) => {
    return [200, notesDB.notes];
});

mock.onGet('/api/notes-app/labels').reply((config) => {
    return [200, notesDB.labels];
});

mock.onPost('/api/notes-app/create-note').reply((request) => {
    const data = JSON.parse(request.data);
    const newNote =
        {
            ...data.note,
            id: FuseUtils.generateGUID()
        };
    notesDB.notes = [
        newNote,
        ...notesDB.notes
    ];
    return [200, newNote];
});

mock.onPost('/api/notes-app/update-note').reply((request) => {
    const data = JSON.parse(request.data);

    notesDB.notes = notesDB.notes.map((note) => {
        if ( data.note.id === note.id )
        {
            return data.note
        }
        return note
    });

    return [200, data.note];
});

mock.onPost('/api/notes-app/update-labels').reply((request) => {
    const data = JSON.parse(request.data);

    notesDB.labels = data.labels;

    return [200, notesDB.labels];
});

mock.onPost('/api/notes-app/remove-note').reply((request) => {
    const data = JSON.parse(request.data);

    notesDB.notes = notesDB.notes.filter((note) => data.noteId !== note.id);

    return [200, notesDB.notes];
});

