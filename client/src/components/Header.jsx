import React from 'react'
import PropTypes from 'prop-types'

var Header = function(props){
  return (
    <div className='header'>
      {props.title}
    </div>
  )
}

Header.propTypes = { title: PropTypes.string.isRequired }

module.exports = Header
