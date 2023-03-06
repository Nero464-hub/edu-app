import React from 'react'
import css from "../styles/login.module.css"
import {Link} from "react-router-dom"
import pic from "../images/image1.jpg"

const Login = () => {
  return (
    <div className={css.container}>
      <div className={css.div1}>
        <form action='/' method='get'  className={css.content}>
          <div>
            <span className={css.span1}>LOGIN</span>
            <span className={css.span2}>Login into your account</span>
          </div>
          <div>
            <input type="text" className={css.inp1} placeholder="Username" name="" id="" />
            <input type="password" className={css.inp2} placeholder="Password" name="" id="" />
          </div>
          <div className={css.div2}>
            <Link>Forgot Password?</Link>
            <button className={css.btn}>Log In</button>
          </div>
          <span className={css.span3}>Don't have an account click <Link to="/sign-up">here</Link> to sign-up</span>
        </form>
      </div>
      <div>
        <img src={pic} alt="" />
      </div>
    </div>
  )
}

export default Login