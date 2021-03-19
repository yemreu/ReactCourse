import * as actionTypes from "./actionTypes";

export const increaseCounter = () => ({
    type : actionTypes.INCREASE_COUNTER,
    payload : 1
})

export const decreaseCounter = () => ({
    type : actionTypes.DECREASE_COUNTER,
    payload : 1
})

export const increaseCounterByTwo = () => ({
    type : actionTypes.INCREASE_COUNTER_BY_TWO,
    payload : 2
})