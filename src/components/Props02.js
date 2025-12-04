import { useState } from "react";
import Box from "./Box";

function Props02(){

    //배열의 값이 변경되면서 -> 유지 -> 화면에 재렌더링

    let [textArr, setTextArr] = useState(['아침', '점심', '저녁']);
    let [detailArr, setDetailArr] = useState(['배고프다', '졸리다', '피곤하다']);
    return (
        <div>

            <button onClick={()=>{
                //야식
                //행복하다

                let tempTextArr = [...textArr];
                tempTextArr.push('야식');
                detailArr.push('행복하다');
                setTextArr(tempTextArr);
            }}>내용 추가버튼</button>

            {
                textArr.map((item, index)=>{
                    return <Box text={textArr[index]} detail={detailArr[index]} key={index}/>;
                })
            }
        </div>
    )
}
export default Props02;