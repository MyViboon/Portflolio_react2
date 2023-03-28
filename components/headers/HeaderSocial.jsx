import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="https://Link.com" target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com" target='_blank' rel="noreferrer"><FaGithub/></a>
        <a href="https://dribble.com" target='_blank' rel="noreferrer"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocial