import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const World = props => (
  <div>World {props.name}!</div>
)

World.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <World name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})
