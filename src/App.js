import React, {useState} from "react";
import { useEffect } from "react/cjs/react.development";
import CgpaCalculator01 from "./CGPA_Calculator/CgpaCalculator01";


 // a dummy semNum
 const semData = [
  {
    id  : 'Sem 1',
    sem : 1,
    sem_gpa : 0,
    sem_hours : 0 ,
    sem_subjectsList : [
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
  }
]

function App() {

  const [updateSem,setUpdateSem] = useState(semData);
  const [cgpa, setCgpa] = useState(0.00);

  useEffect(()=>{
    // console.log(updateSem);
    calculateCGPA();
  },[updateSem]);

  function calculateCGPA(){
    let W_CGPA = 0;
    let total_credit_hours = 0;
    let CGPA = 0;

    for(let i in updateSem)
    {
      W_CGPA = W_CGPA + (updateSem[i].sem_gpa * updateSem[i].sem_hours);
      total_credit_hours = total_credit_hours + (updateSem[i].sem_hours);
    }

    if(total_credit_hours !== 0)
    {
      CGPA = (W_CGPA/total_credit_hours).toFixed(2);
    }
    else
    {
      CGPA = (0).toFixed(2);
    }
    setCgpa(CGPA);
  }

  function addSemesterHandler()
  {
    const newSem = {
      id : Math.random().toString(),
      sem : updateSem.length+1,
      sem_gpa : 0,
      sem_hours : 0,
      sem_subjectsList : [
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
    }
    setUpdateSem((prevSem)=>{
      return [...prevSem,newSem]
    });
  }

  function deleteSemester(deleteSemesterID) 
  {
    setUpdateSem(prevSem=>{
      let afterRemoveSem = prevSem.filter(nonRemove=>nonRemove.id !== deleteSemesterID);
      for(let i in afterRemoveSem)
      {
        afterRemoveSem[i].sem = +i+1;
      }
      return afterRemoveSem;
    }) 
  }

  return (
    <div>
      <ul>
        {updateSem.map((eachSem)=>(
          <CgpaCalculator01
              key={eachSem.id} 
              eachSemData={eachSem}
              onCalculateCGPA={calculateCGPA}
              onDeleteSems={deleteSemester}/>
        ))}
      </ul>
      <div>
        <h3> <button onClick={addSemesterHandler}> Add Semester </button> CGPA : {cgpa} </h3>
      </div>
    </div>
  );
}

export default App;
