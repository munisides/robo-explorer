import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='tc bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/sets_1,3/${id}?size=200x200`} />
      <div style={{ width: "220px" }}>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
