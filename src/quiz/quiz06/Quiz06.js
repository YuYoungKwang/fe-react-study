import './Quiz06.css'
import { useState } from 'react';
import ColorBox06 from './ColorBox06';

function Quiz06() {





    //배열에 추가 삭제
    //push(1) pop
    //shift unshift(1)

    //let [arr, setArr] = useState(['red', 'blue', 'green', 'black', 'orange', 'yellow', 'purple', 'pink']);
    let [arr, setArr] = useState(['red', 'blue', 'green', 'black']);

    const removeColorBox = (index) => {
                    //splice 함수
                    // 인덱스 위치에 1개 삭제
                    // 삭제를 원본데이터에 반영
                    // 원본배열, set배열함수 -> 원본반영 + 재렌더링
                    let temp = [...arr];
                    temp.splice(index, 1);
                    setArr(temp);
                }

    return (
        <div>
            <div>
                <button onClick={() => {
                    let temp = [...arr];
                    temp.unshift('red');
                    setArr(temp);
                }}>앞빨간박스추가</button>
                <button onClick={() => {
                    let temp = [...arr];
                    temp.unshift('blue');
                    setArr(temp);
                }}>앞파란박스추가</button>
                <button onClick={() => {
                    let temp = [...arr];
                    temp.unshift('green');
                    setArr(temp);
                }}>앞초록박스추가</button>

                <button onClick={() => {
                    let temp = [...arr];
                    temp.push('red');
                    setArr(temp);
                }}>뒤빨간박스추가</button>
                <button onClick={() => {
                    let temp = [...arr];
                    temp.push('blue');
                    setArr(temp);
                }}>뒤파란박스추가</button>
                <button onClick={() => {
                    let temp = [...arr];
                    temp.push('green');
                    setArr(temp);
                }}>뒤초록박스추가</button>
                <button onClick={() => {
                    let temp = [...arr];
                    temp.shift();
                    setArr(temp);
                }}>앞 박스 삭제</button>
                <button onClick={() => {
                    let temp = [...arr];
                    temp.pop();
                    setArr(temp);
                }}>뒤 박스 삭제</button>

            </div>

            {
                arr.map((item, index)=>{
                    //return <div className="box" style={{ backgroundColor: item }}></div>
                    return <ColorBox06 bgColor={item} arr={arr} setArr={setArr} index={index}
                        removeColorBox={
                            ()=>{removeColorBox(index)}
                        } 
                        removeColorBoxFunc={removeColorBox}
                        />;
                                                            // setArr()
                    //<ColorBox bgColor={'red'}/>
                    //<ColorBox bgColor={'blue'}/>

                    //                                                   'red'  'blue' 'green'
                })
            }
        </div>
    )
}

export default Quiz06;