import React, { useState } from 'react'

const WelcomeApp = () => {
    const [value,setValue]=useState("subcribe")
    const clicking=()=>{
        if (value==="subcribe"){
        setValue("subcribed!")
        }
        else{
            setValue("subcribe")
        }
    }
  return (
    

    <div className='container'>
      <div className='heading'>welcome</div>
      <div className='paragraph'>Thankyou Happy Learning!</div>
      <div >
      <button onClick={clicking} className='buttonStyles'>
        {value}
        </button>
      </div>
    </div>
  )
}

export default WelcomeApp
