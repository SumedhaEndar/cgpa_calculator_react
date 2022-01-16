import React from "react";
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

  const updateSem = semData;

  return (
    <div>
      <ul>
        {updateSem.map((eachSem)=>(
          <CgpaCalculator01
              key={eachSem.id} 
              eachSemData={eachSem}/>
        ))}
      </ul>
      <div>
        <h3> <button> Add Semester </button> CGPA : 0.00 </h3>
      </div>
    </div>
  );
}

export default App;
