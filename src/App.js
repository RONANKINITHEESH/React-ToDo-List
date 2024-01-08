import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [taskName, setTaskName] = useState('');
  const [taskList,setTaskList]=useState([]);

  function addTask(){
        setTaskList([...taskList,taskName]);
  }

  const tasksList=taskList.map((obj,idx)=>{
        return <div className='row justify-content-center m-1'>
           <h1 className='col-md-6 text-lg-start'>{idx+1} {obj}</h1>
           <button onClick={()=>deleteTask(idx)}className='col-md-1 btn btn-danger'>DELETE</button>
        </div>
  })

  function deleteTask(index){
     var duplicateArray=[...taskList]
     duplicateArray.splice(index,1)
     setTaskList(duplicateArray)

  }
  return (
    <div className="App">
     <h1>ToDo List</h1>
     <div className='row justify-content-center'>
          <input type="text" className='col-md-6 m-1' placeholder='newTask' value={taskName} onChange={(e)=>{setTaskName(e.target.value)}}/>
          <button onClick={addTask} className='col-md-1 btn btn-success m-1'>Add Task</button>
     </div>
       {tasksList}
    </div>  
  );
}

export default App;
