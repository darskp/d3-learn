import React from 'react'

const Svgbasic = () => {
  return (
    <div>
        <svg width={500} height={500} style={{border:"1px solid red"}}>
            <rect width={100} height={100} fill='#ff0000' x={100} y={100}/>
            <circle r={10} fill='#00ff00' cx={50} cy={50}/>
            <text fontSize={10} fill='#0000ff' x={100} y={50}>
                Hello World
            </text>
            <path d="M10,20 L50,100" stroke='blue' strokeWidth={1} fill='green'/>
            <path d="M10,20 L50,100" stroke='blue' strokeWidth={1} fill='green'/>
        </svg>
        <svg width={100} height={100} style={{border:"1px solid red"}}>
          <path d='
          M25,25 L25,35
          M75,25 L75,35
          M15,75 C20,100 80,100 85,75' stroke='blue' strokeWidth={1} fill='none'/>

        </svg>
    </div>
  )
}

export default Svgbasic