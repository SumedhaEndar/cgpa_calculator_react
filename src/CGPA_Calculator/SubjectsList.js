import React from "react";


function SubjectsList(props)
{

    return(
        <li>
            <div>
                <input type='text' placeholder="Subject"/>
                <input type='number' placeholder="Points" min='0' max='5'/>
                <input type='number' placeholder="Hours" min='0' max='5'/>
                <button>X</button>
            </div>
        </li>
    )
}

export default SubjectsList;