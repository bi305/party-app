import './App.css';
import profile from "./images/a.png";
import username from "./images/username.png";
import pass from "./images/pass.png";
function LoginUi() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Admin Login Page</h1>
           <div>
             <img src={username} alt="username" className="username"/>
             <input type="text" placeholder="username" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="username"/>
             <input type="password" placeholder="password" className="name"/>
           </div>
          <div className="login-button">
          <button>
            Login
            </button>
          </div>
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default LoginUi;