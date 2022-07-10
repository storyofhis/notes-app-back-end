const notes = require('./notes');
const { nanoid } = require('nanoid');

const addNoteHandler = (request, h) => {
    const { title, tags, body } = request.payload;

    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updateAt = createdAt;

    const newNote = {
        title, tags, body, id, createdAt, updateAt
    }

    notes.push(newNote);

    // menentukan apakah newNote sudah masuk ke dalam array notes
    const isSuccess = notes.filter((note) => note.id === id).length > 0;

    if (isSuccess)  {
        const response = h.response({
            status: 'success',
            message: 'Catatan berhasil ditambahkan',
            data: {
                noteId: id,
            },
        });
        response.code(201);
        return response;
    }
    const response = h.response({
        status: 'fail',
        message: 'Catatan Gagal ditambahkan',
    });
    response.code(500);
    return response;
}

const getAllNotesHandler = () => ({
    status: 'success',
    data: {
      notes,
    },
})

const getNoteByIdHandler = (request, h) => {
    const { id } = request.params;
    const note = notes.filter((n) => n.id === id)[0];
}
module.exports = { addNoteHandler, getAllNotesHandler}