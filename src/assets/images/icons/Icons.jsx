import React from 'react'
import { Link } from 'react-router-dom'

const Icons = ({
  setting,
  friends,
  book,
  singOut,
  article,
  singIn,
  singUp,
  search,
  instagram,
}) => {
  return (
    <>
      {singIn}
      {singUp}
      {friends}
      {setting}
      {book}
      {singOut}
      {article}
      {search}
      {instagram}
    </>
  )
}

export default Icons
