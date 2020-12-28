const increment = "INCREAMENT"
const decreament = "DECREAMENT"

export const inc = () => {
    return {
        type : increment
    }
}
export const dec = () => {
    return {
        type : decreament
    }
}