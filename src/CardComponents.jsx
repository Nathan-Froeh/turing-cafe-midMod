import React from 'react';
import Cards from './Cards';
// import Call from './Fetch';



const CardComponents = ({reservations}) => {

  console.log(reservations)
  const people = reservations.map(res => {
    return <Cards reservation={res} key={res.id}/>
  })
  return (
    <div className='resy-container'>
      {people}
    </div>
  )
}

export default CardComponents;

