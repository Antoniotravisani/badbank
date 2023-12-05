function Login(){
  // ALTEREI AQUI PARA O USO DO CONTEXT [ANTES TINHA NO USER CONTEXT PROVIDER DADOS DIGITADOS]
  //const user = React.useContext(UserContext);
 
 

  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');    

  return (
    <Card
      bgcolor="secondary"
      header="Login"
      status={status}
      body={show ? 
        <LoginForm setShow={setShow} setStatus={setStatus}/> :
        <LoginMsg setShow={setShow} setStatus={setStatus}/>}
    />
  ) 
}

function LoginMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>
        Authenticate again
    </button>
  </>);
}

function LoginForm(props){
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');

 function handle(){
   const firebaseConfig = {
    apiKey: "AIzaSyA6b1Nccp8lxm2UwLclI2cX-xM3ZLdZzq8",
    authDomain: "mit1-d71ae.firebaseapp.com",
    projectId: "mit1-d71ae",
    storageBucket: "mit1-d71ae.appspot.com",
    messagingSenderId: "673400821121",
    appId: "1:673400821121:web:47d8a2cc052567c193c480"
};

  // Check if Firebase is already initialized
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
    const auth  = firebase.auth();		
		const promise = auth.signInWithEmailAndPassword(email, password);
		promise.catch(e => console.log(e.message));
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser){
        console.log(firebaseUser);
        props.setStatus('');
        props.setShow(false);
        /*logout.style.display = 'inline';
        login.style.display  = 'none';
        signup.style.display = 'none'; */
      }
      else{
        console.log('User is not logged in');
        props.setStatus(text)
        /*logout.style.display = 'none';			
        login.style.display  = 'inline';
        signup.style.display = 'inline';*/
      }

    })}; 

    
  
  function handlegoogle(){
    const firebaseConfig = {
    apiKey: "AIzaSyA6b1Nccp8lxm2UwLclI2cX-xM3ZLdZzq8",
    authDomain: "mit1-d71ae.firebaseapp.com",
    projectId: "mit1-d71ae",
    storageBucket: "mit1-d71ae.appspot.com",
    messagingSenderId: "673400821121",
    appId: "1:673400821121:web:47d8a2cc052567c193c480"
};

  // Check if Firebase is already initialized
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const auth  = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const promise = auth.signInWithPopup(provider);
  promise.catch(e => console.log(e.message));
  if(firebaseUser){
    console.log(firebaseUser);
    props.setStatus('');
    props.setShow(false);
    /*logout.style.display = 'inline';
    login.style.display  = 'none';
    signup.style.display = 'none'; */
  }
  else{
    console.log('User is not logged in');
    props.setStatus(text)
  }};
  
  

  /* signInWithPopup(auth, provider)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("You are logged in using the following email:" + userCredential.email)
      })
      .catch((error) => {
        // Lidar com erros de autenticação, se houver
        console.error('Erro de autenticação:', error);
      });
  
  };  */


 

  /*const promise = auth.signInWithPopup(provider);
	promise.catch(e => console.log(e.message));


    fetch(`/account/login/${email}/${password}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus('');
            props.setShow(false);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus(text)
            console.log('err:', text);
        }
    });
  }
  */

  return (<>

    Email<br/>
    <input type="email" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    Password<br/>
    <input type="password" 
      className="form-control" 
      placeholder="Enter password" 
      value={password} 
      onChange={e => setPassword(e.currentTarget.value)}/><br/>

    <button type="submit" className="btn btn-light" onClick={handle}>Login</button><br/><br/>
    
    <button type="submit" className="btn btn-light" onClick={handlegoogle}>Login with Google</button>
   
  </>)
}

