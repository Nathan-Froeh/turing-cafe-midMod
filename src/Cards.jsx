import React from 'react';



const Cards = ({reservation}) => {


  const {name, date, time, number} = reservation
  // console.log(name)
  return (
    <article className={'card'}>
      <p>{name}</p>
      <p>{date}</p>
      <p>{number}</p>
      <p>{time}</p>
    </article>
  )
}

export default Cards; 



// date: "12/29"
// id: 1
// name: "Christie"
// number: 12
// time: "7:00"
