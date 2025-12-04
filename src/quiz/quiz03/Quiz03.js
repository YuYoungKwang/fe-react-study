import Quiz03_Box from "./Quiz03_Box";
import './Quiz03.css';
function Quiz03() {
    let title = ['하나', '둘', '셋', '넷', '다섯'];
    let text = ['내용하나', '내용둘', '내용셋', '내용넷', '내용다섯'];
    return (

        <div>
            {
                title.map((val, index) =>{
                    return <Quiz03_Box title={title[index]} text={text[index]}/>;
                })
            }    
        </div>
    );
}

export default Quiz03;