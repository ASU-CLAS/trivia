//state arg is not application state, only the state that this reducer is responsible for
export default function(state=0, action) {

  switch (action.type) {
    case 'NEXT_QUESTION':
    console.log(state, action)
    state +=1
  }

  return state

}
