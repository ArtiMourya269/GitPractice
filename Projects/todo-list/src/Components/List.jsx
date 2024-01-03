import React from 'react'

const List = () => {
  const name="Buy Milk";
  const date="01/12/2023";
  return (
    
      <div className="row content">
      <div class="col-6">{name}</div>
      <div class="col-4">{date}</div>
      <div class="col-2"><button class="btn btn-danger">Delete</button></div>
      </div>
    
  )
}

export default List
