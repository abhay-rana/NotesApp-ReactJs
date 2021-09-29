import React, { useContext, useState } from 'react'
import { notecontext } from '../Context/NoteContext'
import '../Styles/Sidebar.css'
function Sidebar() {
    const [show, setshow] = useState("false")
    const vals = useContext(notecontext)
    const {color,addNote}=vals;
    // console.log(vals)
    return (
        <>
            <div className="sidebar">
                <img src="../image/plus.png" alt="plus_img" className="img_plus" onClick={()=>setshow(!show)}></img>
                <ul className={show?"lists":"dontshow"} >
                    {
                       color.map((item)=> (
                           <li key={Math.random()*10}><div className="list_color" style={{backgroundColor:item}} onClick={()=>addNote(item)}></div></li>
                       )) 
                    }
                </ul>
            </div>
        </>
    )
}

export default Sidebar
