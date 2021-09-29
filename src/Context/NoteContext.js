import React, { createContext, useReducer } from 'react';
import reducer from './Reducer';
export const notecontext=createContext(NoteContext);

function NoteContext(props) {
    const initialState= {
    notes:  [],
    newnote: null
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    
    const color=["tan","whitesmoke","pink","green","yellow"];
    //ACTIONS
    const addNote=(id)=>{
        dispatch({
            type: "ADD_NOTE",
            payload:id,
        });
    }

    const deleteNote=(id)=>{
        dispatch({
            type:"DELETE_NOTE",
            payload:id
        })
    }

    return (
        <>
          <notecontext.Provider value={{
              state,
                color,
                addNote,
                deleteNote
          }} >
              {props.children}
        </notecontext.Provider>  
        </>
    )
}

export default NoteContext
