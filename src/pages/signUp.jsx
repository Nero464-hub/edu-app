import React from 'react'
import css from "../styles/signup.module.css"
import {Link} from "react-router-dom"
import {RxPerson as Person} from "react-icons/rx"
import { IoMdPaperPlane as Plane } from "react-icons/io"
import { VscLockSmall as Lock } from "react-icons/vsc"
import { BsEyeFill as OpenEye } from 'react-icons/bs'
import { BsEyeSlashFill as CloseEye } from 'react-icons/bs'

const SignUp = () => {
  return (
    <div className={css.container}>
      <span className={css.span1}>Sign-Up</span>
      <form action="" method="post">
        <span className={css.span2}>Create Your Account</span>
        <div>
          <label htmlFor="name">FullName</label>
          <input type="text" placeholder='Name' name="" id="" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Email' name="" id="" />
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <input type="Password" placeholder='Password' name="" id="" />
        </div>
        <div>
          <label htmlFor="Password">Confirm Password</label>
          <input type="Password" placeholder='Password' name="" id="" />
        </div>
        <button>Sign Up</button>
        <span className={css.span3}>Already have an account?<Link to='/login'>Login here</Link></span>
      </form>
    </div>
  )
}

export default SignUp