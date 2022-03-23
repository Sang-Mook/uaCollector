import React, { useEffect } from 'react'
import axios from 'axios'

function Main() {
  useEffect(() => {
    const ua = encodeURIComponent(navigator.userAgent)
    const lua = ua.toLocaleLowerCase()
    let isPc = 'y'
    if (lua.indexOf('android') > -1 || lua.indexOf('iphone') > -1
      || lua.indexOf('ipad') > -1 || lua.indexOf('iot') > -1) {
      isPc = 'n'
    }
    axios.get(`http://183.78.133.64:4001/api/v1/baseEnv/saveUA?ua=${ua}&isPC=${isPc}`)
    console.log(navigator.userAgent)
  }, [])

  return (
    <>
      <p>{navigator.userAgent}</p>
    </>
  )
}

export default Main
