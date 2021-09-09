import React from 'react'

type ReactocatsProps = {
  name: string
  number: number
  image: string
  creator: string
}
export function Reactocat(props: ReactocatsProps) {
  return (
    <li>
      <a href={props.image}></a>
      <strong>{props.name}</strong>
    </li>
  )
}
