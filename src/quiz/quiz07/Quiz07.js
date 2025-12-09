import { Routes, Route, Link, useNavigate, Router } from 'react-router';
function Quiz07() {
  let navigate = useNavigate();
  return (
    <div>
      <button onClick={()=>{navigate("/")}}>Main</button>
      <button onClick={()=>{navigate("/info")}}>/info</button>
      <button onClick={()=>{navigate("/mypage")}}>/mypage</button>
      <button onClick={()=>{navigate("/cart")}}>/cart</button>
      <Routes>
        <Route path='/' element={<div><p>Main</p></div>}></Route>
        <Route path='/info' element={<div><p>info 공간입니다.</p></div>}></Route>
        <Route path='/mypage' element={<div><p>mypage 공간입니다.</p></div>}></Route>
        <Route path='/cart' element={<div><p>cart 공간입니다.</p></div>}></Route>
      </Routes>
    </div>
  );
}

export default Quiz07;
