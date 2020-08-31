export const setCacheData= (k:string,v:string) =>{
    var storage=window.localStorage;
    return  storage.setItem(k,v)
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

export const add=  (a:number,b:number):number=>{
    return a+b;
}