import React from 'react'
import { Redirect } from 'react-router'

export const IntentRedirect = props => {
  const { param, to, value } = props
  const urlParams = new URLSearchParams(document.location.search)
  const urlValue = urlParams.get(param)
  const match = urlValue === value
  console.debug(urlValue)
  return (to && match ? <Redirect to={to} /> : null)
}

export default IntentRedirect
