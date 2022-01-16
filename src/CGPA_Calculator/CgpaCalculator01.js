import React ,{useState, useEffect} from "react";
import CgpaCalculator02 from "./CgpaCalculator02";


function CgpaCalculator01(props)
{
    // const updateGPA = props.eachSemData.sem_subjectsList;
    const [updateGPA,setUpdateGPA] = useState(props.eachSemData.sem_subjectsList);
    const [calcGPA, setCalcGPA] = useState("0.00")

    useEffect(()=>
    {
        calculateGPA()
    },[updateGPA])
   

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
        // console.log(updateGPA);
        calculateGPA();
    }

    function calculateGPA()
    {
        let GPA = 0;
        let W_GP = 0;
        let credit_hours = 0;

        for(let i in updateGPA)
        {
            if(updateGPA[i].points !== 0)
            {
                W_GP = W_GP + updateGPA[i].points*updateGPA[i].hours;
                credit_hours = credit_hours + updateGPA[i].hours; 
            }
            
        }
        if(credit_hours !== 0)
        {
            GPA = (W_GP / credit_hours).toFixed(2);
        }
        else
        {
            GPA = (0).toFixed(2);
        }        
        setCalcGPA(GPA);
        props.eachSemData.sem_gpa = +GPA;
        props.eachSemData.sem_hours = +credit_hours;
        props.onCalculateCGPA();
        // console.log(GPA);
    }

    function deleteSemHandler() 
    {
        props.onDeleteSems(props.eachSemData.id);   
        // console.log('Hello');
    }

    return(
        <div>
            <li>
                <h2> Semester {props.eachSemData.sem}<button onClick={deleteSemHandler}>X</button></h2>
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
                        Semester {props.eachSemData.sem} GPA : {calcGPA} 
                        <button  onClick={addSubjectHandler}> Add Subject</button>
                    </h4>
                </div>
            </li>
        </div>
    )
}

export default CgpaCalculator01;