import React from 'react'

const AddTodo = () => {
  return (
   
      <div className="row content">
        <div class="col-6"><input type='text' placeholder='Add Todo Name'></input></div>
        <div class="col-4"><input type='date'></input></div>
        <div class="col-2"><button className=' btn btn-primary'>Add</button></div>

      </div>
  
  )
}

export default AddTodo
