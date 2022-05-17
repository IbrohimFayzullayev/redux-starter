import store from "./store";
import * as actions from "./actionTypes";
import { bugAdded, bugResolved } from "./actions";
store.dispatch(bugAdded("BUG 1"));
store.dispatch(bugResolved(1));

console.log(store.getState());
// const unsubscribe = store.subscribe(() => {
//   console.log("Store Changed!", store.getState());
// });

// store.dispatch({});

// unsubscribe();

// store.dispatch({
//   type: actions.BUG_REMOVED,
//   payload: {
//     id: 1,
//   },
// });
// console.log(store.getState());
// console.log(store);
