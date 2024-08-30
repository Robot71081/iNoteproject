import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [Notes, setNotes] = useState(notesInitial);

  //get all note
  const getNotes = async () => {
    //api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjZjYjY3YmNjNjYxODUxYTU2ZDU0NTdhIiwiaWF0IjoxNzI0NjA2NDI2fQ.X175-I1I2n1zn2_QK16zWwM_wRSI1tWREQaROHjp2RQ",
      },
    });

    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  //add a note
  const addNote = async (title, description, tag) => {
    //edit a note

    //api call
    const response = await fetch(`${host}/api/notes/addnote/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjZjYjY3YmNjNjYxODUxYTU2ZDU0NTdhIiwiaWF0IjoxNzI0NjA2NDI2fQ.X175-I1I2n1zn2_QK16zWwM_wRSI1tWREQaROHjp2RQ",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const note = {
      _id: "66cf5b33569061970f0a6550",
      user: "66cb67bcc661851a56d5457a",
      title: title,
      description: description,
      tag: tag,
      date: "2024-08-28T17:15:31.209Z",
      __v: 0,
    };
    setNotes(Notes.concat(note));
  };

  //delete a note
  const deleteNote = async (id) => {
    //api call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjZjYjY3YmNjNjYxODUxYTU2ZDU0NTdhIiwiaWF0IjoxNzI0NjA2NDI2fQ.X175-I1I2n1zn2_QK16zWwM_wRSI1tWREQaROHjp2RQ",
      },
    });
    const json =await response.json();

    const newNote = Notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };

  //edit a note
  const editNote = async (id, title, description, tag) => {
    //api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjZjYjY3YmNjNjYxODUxYTU2ZDU0NTdhIiwiaWF0IjoxNzI0NjA2NDI2fQ.X175-I1I2n1zn2_QK16zWwM_wRSI1tWREQaROHjp2RQ",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    let newNotes = JSON.parse(JSON.stringify(Notes));

    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ Notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
