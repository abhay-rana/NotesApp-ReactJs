// import React from 'react';
function reducer(state,action){
    switch(action.type){
        case "ADD_NOTE":
            console.log("notes is :")
            console.log(state.notes)    
            return{
                ...state,
                notes:[{
                    text:"",
                    color:action.payload,
                    id:Date.now()+Math.random()*10,
                    time:new Date().toString().substring(0,15)
                },...state.notes]
            
            };
        case "DELETE_NOTE": 
            return{
                ...state,
                notes:state.notes.filter((item)=> action.payload!==item.id)
             
            }
            
        default:
            return state
    }
}

export default reducer;