import { useState } from "react";

function Quiz02(){
    
    let textArr =['하나','둘', '셋'];
    let [count, setCount] = useState(0);
    const textFunc = ()=>{
        setCount((count+1) % textArr.length);
    }
    return(
        <div className="App">
            <p>{textArr[count]}</p>
            <button onClick={(textFunc)}>변경버튼</button>
        </div>
    )
}

export default Quiz02;