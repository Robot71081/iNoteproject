import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState=(props)=>{
    const notesInitial=[
        {
          "_id": "66cf5b2e569061970f0a654e",
          "user": "66cb67bcc661851a56d5457a",
          "title": "my title",
          "description": "good morning how are you",
          "tag": "youtube",
          "date": "2024-08-28T17:15:26.432Z",
          "__v": 0
        },
        {
          "_id": "66cf5b33569061970f0a6550",
          "user": "66cb67bcc661851a56d5457a",
          "title": "my title",
          "description": "good morning how are you",
          "tag": "youtube",
          "date": "2024-08-28T17:15:31.209Z",
          "__v": 0
        }
      ]

   const [Notes,setNotes]=useState(notesInitial)
    
    
    
   return(

       <NoteContext.Provider value={{Notes,setNotes}}>
        {props.children}
        </NoteContext.Provider>
   )
}

export default NoteState