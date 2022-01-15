import React from "react";
import Semesters from "./CGPA_Calculator/Semesters";


 // a dummy semNum
 const semNum = [
  {
    id  : 'Sem 1',
    sem : 1,
    gpa : 0,
    hours : 0 
  }
]

function App() {

  return (
    <div>
      <ul>
        {semNum.map((eachSem)=>(
          <Semesters semNum={eachSem}/>
        ))}
      </ul>
      <div>
        <h3><button>Add Semester</button></h3>
      </div>
    </div>
  );
}

export default App;
