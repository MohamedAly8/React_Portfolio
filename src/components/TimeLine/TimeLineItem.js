import React from 'react';

const TimeLineItem = ({ data }) => {
  return (
    <div>
      <h3>{`${data.month} ${data.year}`}</h3>
      <p>{data.text}</p>
    </div>
  );
};

export default TimeLineItem;