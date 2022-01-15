import React, { useState } from "react";
import SubjectsList from "./SubjectsList";

const DUMMY = [
    {
        id : 's1',
        points : 0,
        hours : 0
    },
    {
        id : 's2',
        points : 0,
        hours : 0
    },
    {
        id : 's3',
        points : 0,
        hours : 0
    }
]

function Semesters(props)
{
    const [updateGPA,setUpdateGPA] = useState(DUMMY);

    function addSubjectHandler()
    {
        const newDUMMY = {
            id : Math.random().toString(),
            points : 0,
            hours : 0
        }

        setUpdateGPA((prevData)=>{
            return [...prevData,newDUMMY];
        })
    }

    function saveUpdateGPAPoints(enteredUpdatePoints)
    {
        console.log(enteredUpdatePoints);
    }

    return(
        <div>
            <li>
                <div>
                    <h2>Semester {props.semData.sem} <button>X</button></h2>
                    <ul>
                        {updateGPA.map((eachUpdate)=>(
                            <SubjectsList 
                                key={eachUpdate.id}
                                subjectData={eachUpdate}
                                onSaveUpdateGPAPoints={saveUpdateGPAPoints}/>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4>
                        Semester {props.semData.sem} GPA : 0.00 
                        <button onClick={addSubjectHandler}>Add Subject</button>
                    </h4>
                </div>
            </li>
        </div>
    )
}

export default Semesters;