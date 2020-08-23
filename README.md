# react+typescript+jest

# 项目的安装
npx create-react-app project-name --template typescript

# 关于css的模块化
经过测试，决定使用scss在项目中
首先把webpack的配置文件弄出来
```
npm run eject
```
then
增加一个module：true的设置在sass的配置上，（sass和scss的配置webpack是一样的，scss就比sass多一可以用括号的功能
，写起来更方便一些）
无需另外的安装，样式名称必须是xx.module.scss
如a.module.scss
内容可以如下格式
```
$red : red;
.a{
  :global{
    .b{
      color: $red;
    }
  }
}

```
模板部分
```
import React from 'react';
import fontstyle from './a.module.scss'
const Item:React.FC=() =>{

    return (
        <span className={fontstyle.a}>
            <a href="" className={"b"}>12313</a>
        </span>
    );
}
export default Item;
```
参考资料
https://blog.csdn.net/sinat_36359516/article/details/107975037
http://www.ruanyifeng.com/blog/2016/06/css_modules.html


# 设置src的别名
https://www.cnblogs.com/hsl-shiliang/p/10333022.html

# redux的使用
数据层框架
安装
```
npm i redux react-redux @types/react-redux
```
再去index.ts引入provider
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";  //这个

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```
再去创建一个store的目录在src的根目录下，在store目录中创建一个index.ts的文件
```
import {createStore} from "redux";
import reducer from "./reducer";

const store = createStore(
    reducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

```
接着在src/index.ts引入上面的文件
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```
上面还有个reducer文件，我在store目录下面新建一个noteReducer.ts文件
```
interface NoteState {
    notes:string[]
}
const initialState = {
    notes:[]
}

type Action ={
    type:"ADD_TYPE",
    payload:string
}
export const noteReducer = (state:NoteState=initialState,action:Action) =>{
    switch (action.type){
        case "ADD_TYPE":{
            return {...state,notes:[...state.notes,action.payload]}
        }
        default:
            return state
    }
}
```
然后引入到store中
```
import {createStore} from "redux";
import reducer from "./reducer";

import {noteReducer} from "./noteReducer";


const store = createStore(
    noteReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

```
最后把store注入到src/index.ts的provider里面
```
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```
接着去写Reduxdemo
```
import React from 'react';

import {Newnote} from "./Newnote";
import {useDispatch, useSelector} from "react-redux";
import {NoteState} from "../store/noteReducer";
import {addNote} from "../store/actionCreator";

function Reduxdemo(){
    const notes = useSelector<NoteState,NoteState['notes']>(state=>state.notes)
    const dispatch = useDispatch();
    const addNoteClick = (note:string) =>{
        dispatch(addNote(note))
    }
    return (
        <div>
            <Newnote addNote={addNoteClick}/>
            <ul>
                {notes.map((item)=>{
                    return (
                        <li key={item}>{item}</li>
                    )
                })}
            </ul>
        </div>
    );
}
export default Reduxdemo;
```
我新建了一个actioncreator的文件
```
export type Action ={
    type:"ADD_TYPE",
    payload:string
}

export const addNote = (note:string):Action =>({
    type:"ADD_TYPE",
    payload:note
})
```

# 如何组织redux在react+ts中
按模块划分，每个模块都有自己的reducer,actioncreator,actiontype,最后通过reducercombiner
汇总到一起(暂未处理)



https://redux.js.org/recipes/usage-with-typescript

# 使用redux-thunk
为什么要用这个，为了把异步的逻辑抽取出来，方便测试
先安装
https://github.com/zalmoxisus/redux-devtools-extension



参考资料
https://www.bilibili.com/video/av94656287?p=39

# 使用路由
npm install --save react-router-dom @types/react-router-dom



# 在ts中,type和interface的不同点
https://juejin.im/post/6844903749501059085#heading-11

# ajax 发送循环问题解决
https://juejin.im/post/6844903807000772621

