import axios from 'axios';

const GET_GREETING = 'hello-rails-react/greetings/GET_GREETING';

const getGreeting = (payload) => ({
  type: GET_GREETING,
  payload,
});

const initialState = [];

export const getGreetingApi = () => async (dispatch) => {
  const returnValue = await axios.get('http://localhost:3000/api/v1/greetings');
  const greeting = returnValue.data.message;
  dispatch(getGreeting(greeting));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
