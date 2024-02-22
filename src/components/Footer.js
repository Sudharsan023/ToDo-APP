import React from 'react'
import './Content.css'
const Footer = ({length}) => {

    

  return (
    <div><h3>List {length === 1 ? "item" : "items"} = {length}</h3></div>
  )
}

export default Footer