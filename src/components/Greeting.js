import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetingApi } from '../redux/greetings/greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGreetingApi());
  }, [dispatch]);
  const message = useSelector((state) => state.greetingsReducer);

  return (
    <div>
      <p>{ message }</p>
    </div>
  );
};

export default Greeting;
