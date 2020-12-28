import {createAction} from '@reduxjs/toolkit'

const increment = "INCREAMENT"
const decreament = "DECREAMENT"

// export const inc = () => {
//     return {
//         type : increment
//     }
// }
// export const dec = () => {
//     return {
//         type : decreament
//     }
// }

//  REDUX TOOLKIT

// import {createAction} from '@reduxjs/toolkit'

export const inc = createAction(increment);
export const dec = createAction(decreament);