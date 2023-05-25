export const Wait = (time) => {
    let myPromise = new Promise((resolve) => {
        setTimeout(resolve, time)
    })
    return myPromise; 
}