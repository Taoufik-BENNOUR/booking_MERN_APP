import React from 'react'
import "./mailList.css"

const MailList = () => {
  return (
    <div className='mail'>
        <h1 className='mailTitle'>Save dat money</h1>
        <span className='mailDesc'>lorem</span>
        <div className='mailInputContainer'>
            <input className='' type="text" placeholder="your email" />
            <button>Subscribe</button>

        </div>
    </div>
  )
}

export default MailList;