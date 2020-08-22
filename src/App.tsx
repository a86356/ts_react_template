import React, {useState} from 'react';

function App() {
    const [val,setVal] = useState<string>("")
    const [list,setList] = useState<string[]>([])

    const handleClick=()=>{
        setList([...list,val])
        setVal('')
    }

    const handleChange=(e:React.FormEvent<HTMLInputElement>)=>{
        setVal(e.currentTarget.value)
    }

    const deleteItem=(index:number)=>{
        const mylist = [...list];
        mylist.splice(index,1);
        setList(mylist)
    }

    return (
        <div className="App">
            <label htmlFor="inputarea">输入内容</label>
          <input id="inputarea" type="text" value={val} onChange={(e)=>{handleChange(e)}}/>
          <button onClick={()=>{handleClick()}}>提交</button>
            <ul>
                {
                    list.map((item,index)=>{
                        return (<li key={index} onClick={()=>{deleteItem(index)}}>{item}</li>)
                    })
                }
            </ul>
        </div>
    );
}

export default App;
