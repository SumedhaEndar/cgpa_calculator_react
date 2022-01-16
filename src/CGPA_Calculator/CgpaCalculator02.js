import React from "react";


function CgpaCalculator02(props)
{

    function pointsHoursHandler(e)
    {
        let updatePoints =[props.subjectData.id,e.target.value,e.target.placeholder];
        props.onSaveUpdateGPAPointsHours(updatePoints);
    }

    function deleteSubjectHandler()
    {
        props.onDeleteSubjects(props.subjectData.id);
    }

    return(
        <li>
            <div>
                <input type='text' placeholder="Subject"/>
                <input type='number' placeholder="Points" onChange={pointsHoursHandler} min='0' max='5'/>
                <input type='number' placeholder="Hours" onChange={pointsHoursHandler} min='0' max='5'/>
                <button onClick={deleteSubjectHandler}>X</button>
            </div>
        </li>
    )
}

export default CgpaCalculator02;