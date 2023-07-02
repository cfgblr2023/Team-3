export const useLocal = () =>{
    return {"role":window.localStorage.getItem('role'),"id":window.localStorage.getItem('id')}
}