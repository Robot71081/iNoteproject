import React,{useContext, useState} from 'react'
import noteContext from "../context/notes/NoteContext";

const Addnote = () => {
    const context=useContext(noteContext);
    const {addNote}=context;
    const [note,setNote]=useState({title:"",description:"",tag:"default"})
    const handleclick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag)
    }

    const onchange=(e)=>{
   setNote({...note,[e.target.name]:e.target.value})
    }
  return (
    
    <div className="container my-3">
    <h1>Add a Note</h1>
    <form className='my-3'>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">
        Title
      </label>
      <input
        type="text"
        className="form-control"
        id="title"
        name="title"
        
        onChange={onchange}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="description" className="form-label">
       Description
      </label>
      <textarea
        className="form-control"
        id="description"
        name="description"
        rows="3"
        onChange={onchange}
      ></textarea>
     </div>
     <div className="mb-3">
      <label htmlFor="title" className="form-label">
        Tag
      </label>
      <input
        type="text"
        className="form-control"
        id="tag"
        name="tag"
        
        onChange={onchange}
      />
    </div>
     <button type="submit" className="btn btn-primary" onClick={handleclick}>Add Note</button>
     </form>
  </div>
  )
}

export default Addnote
