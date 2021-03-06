import PropTypes from 'prop-types'
import React from 'react'

const Link = ({ active, children, onClick }) => {
  const linkClick = e => {
    e.preventDefault()
    onClick(e.target.innerText)
  }
  return (
    <button className={`btn btn-primary btn-sm ${active && 'active'}`}
      disabled={active} onClick={linkClick}
    >
      {children}
    </button>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
