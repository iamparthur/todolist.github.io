import React, { Component } from 'react'
import CreateTaskInput from './CreateTaskInput'
import Task from './Task'

class TasksList extends Component {
    state = {
        tasks: [
            {text: 'Buy milk', done: false, id: 1},
            {text: 'Pick up Tom from airport', done: false, id:2},
            {text: 'Visit party', done: false, id: 3},
            {text: 'Visit doctor', done : true, id: 4},
            {text: 'Buy meat', done: true, id: 5}
        ]
    }

    onCreate = text => {
        const {tasks} = this.state;
        const newtask = {
            id: Math.random(),
            text,
            done: false
        }

        const updatedTasks = tasks.concat(newtask)
        this.setState({tasks: updatedTasks})
    }

 

    handleTaskStatusChange = id => {
      const updatedTasks = this.state.tasks.map(task => {
          if (task.id === id) {
              return {
                  ...task,
                  done: !task.done
              }
          }
          return task
      }) 
      this.setState({tasks: updatedTasks})

    }

    handleTaskDelete = id => {
        const updatedTasks = this.state.tasks
        .filter(task => task.id !== id)
      this.setState({tasks: updatedTasks})
    }

    render() {
        const sortedList = this.state.tasks
            .slice().sort((a, b) => a.done - b.done)
        return (
           <div className="todo-list">
               <CreateTaskInput onCreate={this.onCreate}/>
             <ul className="list">
                 {sortedList.map(el => (
                     <Task key={el.id} {...el} onDelete={this.handleTaskDelete} onChange={this.handleTaskStatusChange} />
                 ))}
             </ul>
           </div>
        )
    }
}



export default TasksList


