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

    function saveUpdateGPAPointsHours(enterUpdatePoints)
    {
        // This is A Package Code
        // Duplicate a DUMMY for each sem
        let temp_updateGPA = [...updateGPA];

        for(let i in temp_updateGPA)
        {
            if(temp_updateGPA[i].id === enterUpdatePoints[0])
            {
                let temp_Points_Hours = {...temp_updateGPA[i]};
                if(enterUpdatePoints[2]==="Points")
                {
                    temp_Points_Hours.points = +enterUpdatePoints[1];
                    temp_updateGPA[i] = temp_Points_Hours;
                }
                else
                {
                    temp_Points_Hours.hours = +enterUpdatePoints[1];
                    temp_updateGPA[i] = temp_Points_Hours;
                }
                
                setUpdateGPA(temp_updateGPA);
            }
        }
    }
    console.log(updateGPA);

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
                                onSaveUpdateGPAPointsHours={saveUpdateGPAPointsHours}/>
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