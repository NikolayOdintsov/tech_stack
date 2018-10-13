# This project is ReactNative app for personal R&D purposes.

## Libraries for the project
npm install --save redux react-redux

npm install --save asap


see https://github.com/kyle-ssg/react-native-app-id

react-native-app-id com.example.tech_stack "Tech stack App"


## Debugging:
[React native debugger](https://facebook.github.io/react-native/docs/debugging)

## Redux hint:
run code in [JSPlaygrounds](https://stephengrider.github.io/JSPlaygrounds/)
```javascript
const reducer = (state =[], action) => {
  if(action.type === 'split_string') {
    return action.payload.split('');
  } else if(action.type === 'add_charecter') {
    return [ ...state, action.payload ];
  }
  
  return state;
};
const store = Redux.createStore(reducer);

store.getState();

const action = { 
  type: 'split_string', 
  payload: 'asdf' 
};


store.dispatch(action);
store.getState();

const action2 = {
  type: 'add_charecter',
  payload: 'a'
};

store.dispatch(action2);
store.getState();
```
