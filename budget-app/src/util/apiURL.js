
export const apiURL = () =>{
    if (
        process.env.NODE_ENV === "development" ||
        process.env.NODE_ENV === 'test'
     ) {
        return 'http://localhost:3001'
 
    } return 'https://morning-basin-54666.herokuapp.com'
 }