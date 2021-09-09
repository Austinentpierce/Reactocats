import React from 'react'

type ReactocatsProps = {
  name: string
  number: number
  image: string
  creator: string
}
export function Reactocat(props: ReactocatsProps) {
  return (
    <article>
      <a href={props.image}></a>
      <strong>{props.name}</strong>
    </article>
  )
}
