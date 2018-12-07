import dynamic from 'next/dynamic'
import React from 'react'
const Web = dynamic(import('./web/app'))
const Mobile = dynamic(import('./mobile/app'))

export default ({ isMobile, children, ...rest }) => {
  if (isMobile) {
    return <Mobile {...rest}>{children}</Mobile>
  } else {
    return  <Web {...rest}>{children}</Web>
  }
}

