import {useState} from 'react'
import {Link} from 'react-router-dom'
import {getAuth, sendPasswwordResetEmai} from'firebase/auth'
import {toast} from 'react-toastify'
import { ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'

function ForgotPassword() {

  const onChange = (e) => {

  }
  
  const onSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <div>

    </div>
    
  )
}

export default ForgotPassword