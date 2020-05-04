const redux = require('redux')
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const createLogger = reduxLogger.createLogger()


const BUY_CAKE = 'buy the cake'
const BUY_ICECREAM = 'buy the icecream'

const initialCakeState = {
    noOfCakes:10
}

const initialIceCreamState = {
    noOfIcecream:20
}

const buyIceCream = () => {
    return {
        type: BUY_ICECREAM
    }
}

const buyCake = () => {
    return {
        type: BUY_CAKE
    }
}

const cakeReducer = (state = initialCakeState,action) => {
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                noOfCakes: state.noOfCakes-1
            }
        default:
            return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type){
        case BUY_ICECREAM:
            return {
                ...state,
                noOfIcecream: state.noOfIcecream -1
            }
        default: return state
    }
}


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer, applyMiddleware(createLogger))
console.log('state',store)
console.log('initial state ',store.getState())

// const unsubscribe = store.subscribe(
//     ()=> { console.log('updated state',store.getState()) }
// )

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

// unsubscribe()