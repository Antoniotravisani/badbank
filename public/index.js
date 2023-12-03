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
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/login/" component={Login} />
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />
            {/* <Route path="/transactions/" component={Transactions} /> */}
            <Route path="/balance/" component={Balance} />
            <Route path="/alldata/" component={AllData} />
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
