import { useState } from 'react';
import './Quiz05.css';



function Quiz05_1() {

    let [boxs, setBoxs] = useState([<div className='box' style={{background : 'red'}}></div>
            ,<div className='box' style={{background : 'blue'}}></div>
            ,<div className='box' style={{background : 'green'}}></div>
            ,<div className='box' style={{background : 'black'}}></div>]);

    return (
        <div>
            <button onClick={() => { 
                let temp = [...boxs];
                temp.unshift(<div className='box' style={{background : 'red'}}></div>);
                setBoxs(temp);
            }}>앞빨간박스추가</button>
            <button onClick={() => {
                let temp = [...boxs];
                temp.unshift(<div className='box' style={{background : 'blue'}}></div>);
                setBoxs(temp);
            }}>앞파란박스추가</button>
            <button onClick={() => { 
                let temp = [...boxs];
                temp.unshift(<div className='box' style={{background : 'green'}}></div>);
                setBoxs(temp);
            }}>앞초록박스추가</button>

            <button onClick={() => { 
                let temp = [...boxs];
                temp.push(<div className='box' style={{background : 'red'}}></div>);
                setBoxs(temp);
            }}>뒤빨간박스추가</button>
            <button onClick={() => { 
                let temp = [...boxs];
                temp.push(<div className='box' style={{background : 'blue'}}></div>);
                setBoxs(temp);
            }}>뒤파란박스추가</button>
            <button onClick={() => { 
                let temp = [...boxs];
                temp.push(<div className='box' style={{background : 'green'}}></div>);
                setBoxs(temp);
            }}>뒤초록박스추가</button>
            <button onClick={() => { 
                let temp = [...boxs];
                temp.shift();
                setBoxs(temp);
            }}>앞 박스 삭제</button>
            <button onClick={() => { 
                let temp = [...boxs];
                temp.pop();
                setBoxs(temp);
            }}>뒷 박스 삭제</button>
            <br/>
            {
                boxs
            }
        </div>
        
    )
}

export default Quiz05_1;