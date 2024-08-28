import React,{useContext} from 'react'
import noteContext from "../context/notes/NoteContext";
import NoteItem from './NoteItem';

const Notes = () => {
    const context=useContext(noteContext);
  const {Notes,setNotes}=context;
  return (
    <div>
      <div className="row my-3">
        <h1>Your Notes</h1>
        {Notes.map((note)=>{
          return <NoteItem key={note._id} note={note}/>;
        })}
      </div>
    </div>
  )
}

export default Notes
