import React from 'react'

const card = (props) => {
  return (

    //    <div className='card'>
    //   <img height="400px" src="https://wallpapercave.com/wp/wp2377817.jpg"/>
    //   <h1>Balu,21</h1>
    //   <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ipsam?</p>
    //   <button>View Profile</button>
    // </div>

       <div className='card'>
      <img src={props.img}/>
      <h1>{props.user},{props.age}</h1>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ipsam?</p>
      <button>View Profile</button>
    </div>
  )
}

export default card
