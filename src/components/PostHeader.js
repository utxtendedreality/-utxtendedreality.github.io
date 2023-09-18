import {useNavigate, useLocation} from 'react-router-dom';
import {Link} from "react-router-dom";
import { useEffect, useContext } from 'react'; 
import './PostHeader.css'
import {UserContext} from "../UserContext";


export default function PostHeader(props) {
  const navigate = useNavigate();
  const location = useLocation();
  
  const goTo = (path) => () => {
      navigate(path);
  }

  const {setUserInfo,userInfo} = useContext(UserContext);
    useEffect(() => {
      if (username != null) {
      fetch('http://localhost:4000/profile', {
        credentials: 'include',
      }).then(response => {
        response.json().then(userInfo => {
          setUserInfo(userInfo);
        });
      });
    }}, []);


  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
  
  <header className = "post-header">
      <p className="post-header-title">  {props.type} </p>
      <nav>
          {(username != null)   && (
          <>
              {(props.type == "Events") &&
                <Link to="/create-event" className="nav-element">Create new post</Link>
              }
              {(props.type == "Projects") &&
                <Link to="/create-project" className="nav-element">Create new post</Link>
              }
              <p className="nav-element" onClick={logout} > Logout </p>
          </>
          )}

          {username == null && (
                  <> 
        <p className="nav-element" onClick={goTo("/login")}> Login </p>
        <p className="nav-element" onClick={goTo("/register")}> Register </p>
        </>
      )}
      </nav>
  </header>
  )
}