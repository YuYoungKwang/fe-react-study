import { use, useState } from 'react';
import './Quiz04.css';

function Quiz04(){ 

    let [count, setCount] = useState([0]);

    return(
        <div>
            <button onClick={()=>{
                let temp = [...count];
                temp.push(0);
                setCount(temp);
            }}>추가</button>
            <br/>
            {
                count.map(()=>{

                    return(<div className='box'>박스</div> ); 
                })
            }
        </div>
    );
}

export default Quiz04;