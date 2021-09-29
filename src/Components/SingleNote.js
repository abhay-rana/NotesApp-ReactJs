import React, { useContext } from 'react'
import { notecontext } from '../Context/NoteContext'
import '../Styles/SingleNote.css'

function SingleNote({item}) {
    const context = useContext(notecontext);
    console.log(context);
    const {deleteNote}=context; //
    // const {notes}=context;
    return (
        <>
          <div className="single" style={{backgroundColor:item.color}}>
              <textarea placeholder="enter text here"
              className="text_area"></textarea>
              <div className="row">
                <p>{item.time}</p> 
                <img src="../image/delete.svg" alt="delete" className="delete_img" onClick={()=> deleteNote(item.id)}></img>
            </div>  
        </div>
        </>
    )
}

export default SingleNote
