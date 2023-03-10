import React from 'react'
import css from "../styles/signup.module.css"
import {Link} from "react-router-dom"
import { useEffect, useState } from 'react'
import {RxPerson as Person} from "react-icons/rx"
import { IoMdPaperPlane as Plane } from "react-icons/io"
import { VscLockSmall as Lock } from "react-icons/vsc"
import { BsEyeFill as OpenEye } from 'react-icons/bs'
import { BsEyeSlashFill as CloseEye } from 'react-icons/bs'

const SignUp = () => {
  const [password ,setPassword] = useState("")
  const [email ,setEmail] = useState("")
  const [enableBtn ,setEnableBtn] = useState(true)
  const [addCheck ,setAddCheck] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState("")
  const [fullName, setFullName] = useState("")
  const [result, setResult] = useState("")
  const [result1, setResult1] = useState("")
  const [changeType, setChangeType] = useState("password")
  const [changeType1, setChangeType1] = useState("password")
  const [showEye,setShowEye] =useState(true)

  useEffect(()=>{
    var validRegex =  /^(([^<>()[\],;:\s@]+([^<>()[\],;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.match(validRegex)){
      setResult1("")
    }
    else{
      setResult1('invalid email')
    }
    if(password === confirmPassword){
      setResult("")
    }
    else{
      setResult("password does not match")
    }
    if(fullName.length > 0  && email.length > 0 && password.length > 0 && confirmPassword.length > 0 && addCheck === true ){
        setEnableBtn(false);
      }
    else{
      setEnableBtn(true)
    }
  },[fullName,email,password,confirmPassword,addCheck])

  const changeInpType = ()=>{
    if(changeType === "password"){
      setChangeType('text')
      setChangeType1('text')
      setShowEye(false)
    }
    else{
      setChangeType("password")
      setChangeType1("password")
      setShowEye(true)
    }
  }




  return (
    <div className={css.container}>
      <div className={css.div1}>
        <span className={css.span1}>Sign-Up</span>
      <form action="" method="post">
        <span className={css.span2}>Create Your Account</span>
        <div>
          <label htmlFor="name">FullName</label>
          <div className={css.div2}><Person/><input type="text" onChange={(e)=>setFullName(e.target.value)} placeholder='Name' name="" id="" /></div>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <div className={css.div2}><Plane /> <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder='Email' name="" id="" /></div>
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <div className={css.div2}>
            <Lock />
            <input type={changeType1} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' name="" id="" />
            {showEye === true?<OpenEye className={css.img3} onClick={()=> changeInpType()} />:<CloseEye className={css.img3} onClick={()=> changeInpType()} />}
          </div>
        </div>
        <div>
          <label htmlFor="Password">Confirm Password</label>
            <div className={css.div2}><Lock />
            <input type={changeType} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder='Password' name="" id="" />
            {showEye === true?<OpenEye className={css.img3} onClick={()=> changeInpType()} />:<CloseEye className={css.img3} onClick={()=> changeInpType()} />}
          </div>
        </div>
        <span className={css.result1}>{password.length === 0 || confirmPassword.length === 0?'': result} {email.length === 0?'':result1}</span>
        <span className={css.span4}><input className={css.inp1} type="checkbox" name="" onChange={(e)=>setAddCheck(e.target.checked)} value={addCheck} id="" /> I accept the Terms of Use & Privacy Policy</span>
        <button disabled={enableBtn} style={!enableBtn?{cursor:'pointer'}:{cursor:'not-allowed'}}>Sign Up</button>
        <span className={css.span3}>Already have an account?<Link to='/login'>Login here</Link></span>
      </form>
      </div>
      
    </div>
  )
}

export default SignUp