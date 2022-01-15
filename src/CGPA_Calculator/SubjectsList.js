import React from "react";


function SubjectsList(props)
{

    function pointsHandler(e)
    {
        props.onSaveUpdateGPAPoints(e.target.value)
    }

    return(
        <li>
            <div>
                <input type='text' placeholder="Subject"/>
                <input type='number' placeholder="Points" onChange={pointsHandler} min='0' max='5'/>
                <input type='number' placeholder="Hours" min='0' max='5'/>
                <button>X</button>
            </div>
        </li>
    )
}

export default SubjectsList;