import {useState} from 'react'
import {Link} from 'react-router-dom'
import {getAuth, sendPasswwordResetEmai} from'firebase/auth'
import {toast} from 'react-toastify'
import { ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'

function ForgotPassword() {
  return (
    <h1>Forgot Password</h1>
  )
}

export default ForgotPassword