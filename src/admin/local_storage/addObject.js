function addObjectToLocalStorage(key,value){
    localStorage.setItem(key,JSON.stringify(value))
}

export default addObjectToLocalStorage;