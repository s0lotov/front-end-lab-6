import React from 'react';
import CurrentDate from './CurrentDate';
import CurrentTime from './CurrentTime';

const DateTime = () => {
  const currentDate = new Date();

  return (
    <div>
      <CurrentDate date={currentDate} />
      <CurrentTime time={currentDate} />
    </div>
  );
};

export default DateTime;
