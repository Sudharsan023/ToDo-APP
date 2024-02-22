import React from 'react'
import {FaReadme} from 'react-icons/fa'
import './Content.css'

const Header = ({title}) => {
  return (
    <h1 id="head">{title} <FaReadme /></h1>
  )
}

export default Header