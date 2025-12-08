
//<ColorBox bgColor={'red'}/>
//  props = {bgColor:'red'}
//                  props
function ColorBox06({ bgColor, arr, setArr, index, removeColorBox, removeColorBoxFunc}) {
    return (
        <div className="box" style={{ backgroundColor: bgColor }}>
            <button style={{ padding: '5px' }}
                onClick={() => {
                    //splice 함수
                    // 인덱스 위치에 1개 삭제
                    // 삭제를 원본데이터에 반영
                    // 원본배열, set배열함수 -> 원본반영 + 재렌더링
                    let temp = [...arr];
                    temp.splice(index, 1);
                    setArr(temp);

                    //removeColorBox();
                    //removeColorBoxFunc(index);
                }}
            >X</button>
        </div>
    )
}


export default ColorBox06;