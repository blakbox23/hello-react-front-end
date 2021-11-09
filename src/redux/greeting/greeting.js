const GET_GREETING = 'redux/greeting/GET_GREETING';

const initialValue = {};

const getGreeting = (payload) => async (dispatch) => {
    const request = await fetch('http://localhost:3000/v1/greetings');
    const response = await request.json();
    const payload = await response.greeting;
    console.log(payload)
  if (payload) {
    dispatch({
      type: GET_GREETING,
      payload,
    });
  }
};

const greetingReducer = (state = initialValue, action) => {
    switch (action.type) {
      case GET_GREETING:
        return {
          ...state,
          greetings: action.payload,
        };
      default:
        return state;
    }
  };

  export { greetingReducer, getGreeting };