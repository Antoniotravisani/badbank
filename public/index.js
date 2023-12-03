function Spa() {
  // ALTEREI AQUI PARA O USO DO CONTEXT [ANTES TINHA NO USER CONTEXT PROVIDER DADOS DIGITADOS]
  //const user = React.useContext(UserContext);


  return (
    <HashRouter>
      <div>
        <NavBar/>        
        <UserContext.Provider value={""}>
          <div className="container" style={{padding: "20px"}}>
            <Route path="/" exact component={Home} />
            <Route path="http://64.23.140.41:3001/CreateAccount/" component={CreateAccount} />
            <Route path="http://64.23.140.41:3001/login/" component={Login} />
            <Route path="http://64.23.140.41:3001/deposit/" component={Deposit} />
            <Route path="http://64.23.140.41:3001/withdraw/" component={Withdraw} />
            {/* <Route path="/transactions/" component={Transactions} /> */}
            <Route path="http://64.23.140.41:3001/balance/" component={Balance} />
            <Route path="http://64.23.140.41:3001/alldata/" component={AllData} />
          </div>
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
