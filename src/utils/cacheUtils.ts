export const setCacheData= (k:string,v:string) =>{
    var storage=window.localStorage;
    storage.setItem(k,v)
}

export const getCacheData=(key:string)=> {
    return window.localStorage.getItem(key);
}

export const clearCacheData=(arrkeys:string[])=> {
    var storage=window.localStorage;

    for (let i = 0; i < arrkeys.length; i++) {
        storage.removeItem(arrkeys[i]);
    }
}