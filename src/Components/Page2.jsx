import React from 'react'
// import { Cookies } from 'react-cookie';

function Page2() {
    function logout(){
        localStorage.removeItem('token');

        window.location.href = "/login"
    }
    function Clcikme(){
        window.location.href = "/page3"
    }
    React.useEffect(()=>{
        // const cookies = new Cookies();
        // const access_token = cookies.get('access_token')
        // console.log(access_token);
        // if(access_token !== '123456'){
        //     window.location.href ="/login"
        // }
        const token = JSON.parse(localStorage.getItem('token'));
        if(token !== 123456){
            localStorage.removeItem('token');
            window.location.href ="/"
        }
    }, [])
  return (
    <>
         <h1>Page2</h1>
        <button type="button" class="btn btn-success m-4" onClick={logout}>Logout</button>
        <button type="button" class="btn btn-success m-4" onClick={Clcikme}>Clcikme</button>
    </>
  )
}

export default Page2