import React,{useState} from "react";
import './App.css'
function ToDoList(){

        const [task,setTask]=useState(['eat breakfast','go to school' ])
        const [newTask,setNewTask]=useState('')
        const [titl,setTitle]=useState('')


       function handleInputChange(event){
                setNewTask(event.target.value)
        }

        function addTask(){
             if(newTask.trim() !==''){
                setTask(t=>[...t,newTask])
                setNewTask('')
             }
        }

        function deleteTask(index){
                setTask(task.filter((task,i)=>i !==index))
        }

        function moveTaskUp(index){
                if(index>0){
                        let updatedTask=[...task];
                        [updatedTask[index-1],updatedTask[index]]=
                        [updatedTask[index],updatedTask[index-1]];
                        setTask(updatedTask)
                }
        }

        function moveTaskDown(index){
                if(index<task.length-1){
                        let updatedTask=[...task];
                        [updatedTask[index],updatedTask[index+1]]=
                        [updatedTask[index+1],updatedTask[index]];
                        setTask(updatedTask)
                }
        } 
        return(<>
                <div className="to-do-list">
                        <h1>To Do List</h1>

                        <input type="text" placeholder="Enter Your Task.." value={newTask}
                          onChange={handleInputChange}/>
                        <button className="add-btn" onClick={addTask}>Add</button>

                       <ol>
                        {task.map((task,index)=><li key={index}>
                        {index + 1}
                        <span className="text"> {task}</span> 
                                <button className="move-btn" onClick={()=>moveTaskUp(index)}>Up</button>
                                <button className="move-btn" onClick={()=>moveTaskDown(index)}>Down</button>
                                <button className="delet-btn" onClick={()=>deleteTask(index)}>Delete</button>


                                </li>)}
                       </ol>
 
                </div>
        </>
        )
}

export default ToDoList