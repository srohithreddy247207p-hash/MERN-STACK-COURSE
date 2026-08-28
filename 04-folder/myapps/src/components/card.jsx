import React from 'react'
import {Bookmark} from 'lucide-react'

const card = (props) => {
  return (
    <div className='card'>
      <div>
        <div className="top">
          <img src={props.img} alt=''/>
          <button>save <Bookmark size={10}/></button>
        </div>
        <div className="center">
            <h3>{props.cmp}</h3>
            <h2>Senior UI/UX Designer</h2>
            <div className="tag">
                <h4>Part time </h4>
                <h4>Senior level</h4>
            </div>
        </div>
        <div className="bottom">
            <div> 
                <h3>{props.salary}</h3>
                <p>{props.place}</p>
                <button>Apply Now</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default card
