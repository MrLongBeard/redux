const todos=(state=[],action)=>{
    switch(action.type){
        case 'DELETE_TODO':
            return state=state.filter(item=>item.todo!==action.todo)
        default: return state
    }
}


const createStore=(reducer)=>{
    let state
    let listeners = []

    const getState=()=>state
    const subscribe=(listener)=>{
        listeners.push(listener)

        return ()=>{
            listeners = listeners.filter(l => l !== listener)
        }
    }

    const dispatch=(action)=>{
        state = reducer(state,action)

        listeners.forEach(l=>l())
    }


    return {
        getState,
        subscribe,
        dispatch
    }
}