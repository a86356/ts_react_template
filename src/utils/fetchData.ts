import axios from 'axios'

export const fetchData = (callback:any)=>{
    return axios.get("http://www.dell-lee.com/react/api/demo1.json").then(res=>{
        callback(res.data)
    })
}