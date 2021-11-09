import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { getGreeting } from '../redux/greeting/greeting';

const Greeting = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGreeting());
      }, [dispatch]);

const message = useSelector((state) => state.greetingReducer.greetings);

return ( <div>
    <h1>
        {message}
    </h1>
    </div>)
}

export default Greeting;