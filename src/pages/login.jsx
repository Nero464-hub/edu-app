import React from 'react'
import css from "../styles/login.module.css"
import {Link} from "react-router-dom"
import pic from "../images/image1.jpg"
import { useState } from 'react';
import { BsEyeFill as OpenEye } from 'react-icons/bs'
import { BsEyeSlashFill as CloseEye } from 'react-icons/bs'

const Login = () => {
  const [changeType, setChangeType] = useState("password")
  const [showEye,setShowEye] =useState(true)
  const changeInpType =()=>{
    if(changeType === "password"){
      setChangeType('text')
      setShowEye(false)
    }
    else{
      setChangeType("password")
      setShowEye(true)
    }
  }

  return (
    <div className={css.container}>
      <div className={css.div1}>
        <form action='/' method='get'  className={css.content}>
          <div>
            <span className={css.span1}>LOGIN</span>
            <span className={css.span2}>Login Into Your Account</span>
          </div>
          <div>
            <input type="email" className={css.inp1} placeholder="Email" name="" id="" />
            <div className={css.div4}>
              <input type={changeType} className={css.inp2} placeholder="Password" name="" id="" />
              {showEye === true?<OpenEye className={css.img3} onClick={()=> changeInpType()} />:<CloseEye className={css.img3} onClick={()=> changeInpType()} />}
            </div>
          </div>
          
          <div className={css.div2}>
            <Link>Forgot Password?</Link>
            <button className={css.btn}>Log In</button>
          </div>
          <span className={css.span3}>Don't have an account click <Link to="/sign-up">here</Link> to sign-up</span>
        </form>
      </div>
      <div className={css.div3}>
        <img src={pic} alt="" />
      </div>
    </div>
  )
}

export default Login