import React from 'react';


const login = (props) => {
    const {
        email,
        setEmail,
        password,
        setPassword,
      handleLogin,
      handleSignup,
      hasAccount,
      setHasAccount,
      emailError,
      passwordError 
    } = props;


    return (
        
        <div className="main">
   
    <div className="login-title">
      <h2 className="login-text">A Place to Share Images with Like-Minded <span>People!!</span></h2>
      <p className="login-quote">“Be yourself; everyone else is already taken.” ― Oscar Wilde </p>
    </div>
        <section className="login" id="login-form">
            <div className="loginContainer">
                <label className="name disabled">Username</label>
                <input type="text"
                autoFocus required value={email}
                onChange={(e) => setEmail(e.target.value)} />
                <p className="errorMsg">{emailError}</p>
                <label className="name disabled">Password</label>
                <input type="password" required value={password} onChange={e => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                {hasAccount ? (
                    <>
                    <button className="login-btn" onClick={handleLogin} >
                    Sign In
                    </button>
                    <p>
                    Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
                    </p>
                    </>
                ) : (
                    <>
                    <button className="login-btn" onClick={handleSignup}>
                    Sign up
                    </button>
                    <p>Have an account? <span onClick= {() => setHasAccount(!hasAccount)}>Sign in</span></p>
                    </>
                ) }
                </div>
                </div> 
        </section>
        </div>
        
    )
}

export default login;