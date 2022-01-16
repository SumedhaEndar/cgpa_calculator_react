import React ,{useState} from "react";
import CgpaCalculator02 from "./CgpaCalculator02";


function CgpaCalculator01(props)
{
    // const updateGPA = props.eachSemData.sem_subjectsList;
    const [updateGPA,setUpdateGPA] = useState(props.eachSemData.sem_subjectsList);

    function addSubjectHandler()
    {
        const newDUMMY = {
            id : Math.random().toString(),
            points : 0,
            hours : 0
        }
        setUpdateGPA((prevData)=>{
            return [...prevData,newDUMMY];
        });
    }

    function deleteSubject(deleteSubjectID)
    {
        setUpdateGPA(prevData=>{
            let afterRemoveSubject = prevData.filter(nonRemove=>nonRemove.id !== deleteSubjectID);
            return afterRemoveSubject;
        })
    }

    function saveUpdatePointsHours(enterPointsHours)
    {
        for(let i in updateGPA)
        {
            if(updateGPA[i].id === enterPointsHours[0])
            {
                if(enterPointsHours[2]==="Points")
                {
                    updateGPA[i].points = +enterPointsHours[1];
                }
                else
                {
                    updateGPA[i].hours = +enterPointsHours[1];
                }
                
                setUpdateGPA(updateGPA);
            }
        }
        console.log(updateGPA);
    }

    
    return(
        <div>
            <li>
                <h2> Semester {props.eachSemData.sem}</h2>
                <ul>
                    {updateGPA.map((eachUpdate)=>(
                        <CgpaCalculator02 
                            key={eachUpdate.id}
                            subjectData = {eachUpdate}
                            onDeleteSubjects={deleteSubject}
                            onSaveUpdateGPAPointsHours={saveUpdatePointsHours}/>
                    ))}
                </ul>
                <div>
                    <h4>
                        Semester {props.eachSemData.sem} GPA : 0.00  
                        <button  onClick={addSubjectHandler}> Add Subject</button>
                    </h4>
                </div>
            </li>
        </div>
    )
}

export default CgpaCalculator01;