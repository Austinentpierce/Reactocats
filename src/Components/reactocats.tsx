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
      <a href={props.image}>
        <img src={props.image} width="315px" height="315px" alt={props.name} />
      </a>
      <ul>
        <li>
          #{props.number}:
          <a href={props.image}>
            <strong>{props.name}</strong>
          </a>
        </li>
        <li>
          <a href="https://github.com/chubbmo">
            <img src={props.creator} width="24px" height="24px" />
          </a>
        </li>
      </ul>
    </article>
  )
}
