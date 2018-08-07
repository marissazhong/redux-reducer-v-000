export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return { ...state, state.friends: [...state.friends, action.friend]}
    default:
      return { friends: [ { name: 'Avi', hometown: 'NYC', id: 100 } ]}
  }
}
