import React from 'react'

const Slide = (props) => {
  const { children } = props;

  return (
    <div>
      <div style={{ padding: 8 }}>
        {children}
      </div>
    </div>
  )
}

export default Slide