import React,{useState} from "react";
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

  const [updateSem, setUpdateSem] = useState(semNum);
  
  function addSemesterHandler()
  {
    const newSem = {
      id : Math.random().toString(),
      sem : updateSem.length + 1,
      gpa : 0,
      hours : 0
    }
    setUpdateSem((prevSem)=>{
      return [...prevSem, newSem]
    });
  }


  return (
    <div>
      <ul>
        {updateSem.map((eachSem)=>(
          <Semesters semNum={eachSem}/>
        ))}
      </ul>
      <div>
        <h3><button onClick={addSemesterHandler}>Add Semester</button></h3>
      </div>
    </div>
  );
}

export default App;
