import React,{useState, useEffect} from 'react';
import './App.css';
import ChecklistItem from './ChecklistItem';
let lifeGoals = [{goal:"workout regularly",isCompleted:"true"},{goal:"Get new id and get new birthcertificate",isCompleted:"false"},{goal:"Get a bed",isCompleted:"false"},{goal:"Get a bedframe",isCompleted:"false"},{goal:"Learn to drive",isCompleted:"false"}]

function App() {
  const [completedGoals,setCompletedGoals] = useState({total:0,isCounted:false})
  const countGoalCompletion = () => {
    lifeGoals.map((x,index) => {
      
      if(x.isCompleted==="true"){
        let result = completedGoals + 1
        setCompletedGoals({...completedGoals,total:result})
      }
      console.log(index,"index")
      index++
      if(index === lifeGoals-1){
        setCompletedGoals({...completedGoals,isCounted:true})
      }
    })
  }
  useEffect(countGoalCompletion,[lifeGoals,completedGoals])
  return (
    <div className="App">
      <h1>Checklist of Stuff to help me Organize My Life</h1>
  <h3>Goals Completed: {completedGoals.isCounted? completedGoals:"loading..."}</h3>
      {lifeGoals.map(x => {

        return <ChecklistItem goal={x.goal} isComplete={x.isCompleted}/>
      })}
    </div>
  );
}

export default App;
