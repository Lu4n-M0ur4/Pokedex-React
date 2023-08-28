
import GlobalState from "./globalContext/GlobalState.jsx";
import Router from "./routes/Router.jsx";

  


function App() {
  return (
    <GlobalState>
      <Router/>
    </GlobalState>
  );
}

export default App;
