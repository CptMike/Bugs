import configureStore from './store/configureStore';
import { loadBugs, assignBugToUser } from './store/bugs'

const store = configureStore();

//UI Layer
store.dispatch(loadBugs());

setTimeout(() => store.dispatch(assignBugToUser(1, 4)), 2000);






// store.dispatch((dispatch, getState) => {
    
//     dispatch({ type: "bugsReceived", bugs: [1, 2, 3] })
//     console.log(getState());
// });

// store.dispatch({ 
//     type: "error",
//     payload: { message: "An error occurred" }
// })


// import configureStore from './store/configureStore';
// import {
//     bugAdded,
//     bugRemoved,
//     bugResolved,
//     getUnresolvedBugs,
//     bugAssignedToUser,
//     getBugsByUser
// } from './store/bugs'
// import { projectAdded } from './store/projects'
// import { userAdded } from './store/users';


// const store = configureStore();

// store.subscribe(() => {
//     console.log("store changed")
// })

// store.dispatch(userAdded({ name: "User 1" }));
// // store.dispatch(userAdded({ name: "User 2" }));
// // store.dispatch(projectAdded({ name: "Project 1" }));
// // store.dispatch(bugAdded({ description: "Bug1" }));
// // store.dispatch(bugAdded({ description: "Bug2" }));
// // store.dispatch(bugAdded({ description: "Bug3" }));
// // store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));
// // store.dispatch(bugResolved({ id: 1 }));

// const unresolvedBugs = getUnresolvedBugs(store.getState());
// const bugsByUser = getBugsByUser(1)(store.getState());

