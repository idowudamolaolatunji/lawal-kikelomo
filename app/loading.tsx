import React from 'react'
import { TailChase } from 'ldrs/react'
import 'ldrs/react/TailChase.css'


export default function loading() {
  return (
    <div
      className="spinner--container"
      role="presentation"
      aria-label="Loading"
    >
      <TailChase size="40" speed="1" color="#fff" />
    </div>
  )
}
