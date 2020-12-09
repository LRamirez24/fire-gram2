import React, { useState,useEffect } from "react";
import fire from './firebase/config';
import Login from './comps/Login';
import Title from "./comps/Title";
import Explore from "./pages/Explore";
import HeaderLogin from "./comps/HeaderLogin";
import ImageGrid from "./comps/ImageGrid";
import UploadForm from "./comps/UploadForm";
import Modal from "./comps/Modal";
import { BrowserRouter, Switch, Route } from "react-router-dom";




function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [user,setUser] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [emailError,setEmailError] = useState('');
  const [passwordError,setPasswordError] = useState('');
  const [hasAccount,setHasAccount] = useState(false);

const clearInputs = () => {
  setEmail('');
  setPassword('');
}

const clearErrors = () => {
  setEmailError('');
  setPasswordError('');
}




const handleLogin = () => {
  clearErrors();
  fire.auth().signInWithEmailAndPassword(email,password).catch(err => {
    switch(err.code) {
      case "auth/invalid-email":
        case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
            case "auth/wrong-password":
              setPasswordError(err.message);
              break;
              default:
    }
  });
};

const handleSignup = () => {
  clearErrors();
  fire.auth().createUserWithEmailAndPassword(email,password).catch(err => {
    switch(err.code) {
      case "auth/email-already-in-use":
        case "auth/invalid-email":
            setEmailError(err.message);
            break;
            case "auth/weak-password":
              setPasswordError(err.message);
              break;
              default:
    }
  });
}

const handleLogout = () => {
  fire.auth().signOut();
};


  const authListener = () => {
  fire.auth().onAuthStateChanged((user) => {
    if(user) {
      clearInputs();
     setUser(user);
    } else {
      setUser("");
   }
  });
};

useEffect(() => {
  authListener();
}); 



  return (

    <BrowserRouter>

    <div className="App">

    


      {user ? (
           <>
           <Title  handleLogout={handleLogout} />
           <UploadForm />
           <ImageGrid setSelectedImg={setSelectedImg} />
           {selectedImg && (
             <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
           )}
            </>
      ) : (
        <>
         <Switch>
        <Route exact path="/explore">
      
          <Explore />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/">
        <HeaderLogin />
        <Login 
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}      
        />
        </Route>
      </Switch>

       
      </>
      )}
    </div>
    </BrowserRouter>
  );
}

export default App;
