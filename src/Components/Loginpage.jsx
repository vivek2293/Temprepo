import React from "react";
// import { useCookies } from "react-cookie";
function Loginpage() {
    const [userName, setUserName] = React.useState();
    const [passWord, setPassWrod] = React.useState();
    // const [cookies, setCookie] = useCookies(['access_token'])
    function handleClick(){
        console.log(passWord);
        console.log(userName);
        // setCookie('access_token', 123456, { path: '/'})
        localStorage.setItem('token', '123456');
        // console.log(cookies);
        window.location.href = "/page1"
    }

  return (
    <>
      <div>
      Username
        <input
          type="text"
          class="form-control"
          id="validationCustom01"
          onChange={(e) => setUserName(e.target.value)}

          required
        />
      </div>
      <div>
        password
        <input
          type="text"
          class="form-control"
          id="validationCustom01"
          onChange={(e) => setPassWrod(e.target.value)}

          required
        />
      </div>
      <button type="button" class="btn btn-success m-4" onClick={handleClick}>Submit</button>

      
    </>
  );
}

export default Loginpage;
