// defineing constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

// state
const initialCounterState = {
  counter: 0,
};
const initialUserState = {
  users: [
    {
      name: "Mukta Das",
    },
  ],
};

// action - Object- type, payload
//INCREMENT COUNTER
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};
// incrementCounter();
// DECREMENT COUNTER
const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};
// decrementCounter();

const addUser = () => {
  return {
    type: ADD_USER,
    payload: {
      name: "Mukta Thakur",
    },
  };
};
