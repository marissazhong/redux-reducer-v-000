export function managePresents(state={presents: 0,}, action){
  switch (action.type) {
    case 'INCREASE':
      return {presents: state.presents + 1}
  }
}
