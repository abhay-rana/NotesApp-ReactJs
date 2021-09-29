import React, { useContext } from 'react'
import { notecontext } from '../Context/NoteContext';
import '../Styles/NoteContainer.css'
import SingleNote from './SingleNote'
import { Scrollbars } from 'react-custom-scrollbars-2';

function NoteContainer() {
  const context = useContext(notecontext);
  console.log(context)
  const { state } = context; //
  const { notes } = state;
  console.log(notes) //array extract

  return (
    <>
      <div className="note_container">
        <h2>Notes</h2>
        <Scrollbars >

        <div className="notesall">

      {notes.length>0?notes.map((item) =>
        <SingleNote key={item.id} item={item}/>): <h2>No Notes here</h2>}
        </div>
        </Scrollbars>                

      </div>

    </>
  )
}

export default NoteContainer
