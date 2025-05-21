import './App.css';
import { BrowserRouter } from "react-router-dom"
import { Menue } from './components/menue';
import { MyRouting } from './components/myrouting';
import { MyProvider } from './contex';
import { useState } from 'react';
function App() {

  const [cust, setcust] = useState("");
  const [concat, setconcat] = useState(false);
  const [sal, setsal] = useState([])

  const store = {
    currentCustomer: cust,
    setcurrentCustomer: setcust,
    concat: concat,
    setconcat: setconcat,
    sal: sal,
    setsal: setsal
  }
  return (
    <div >
      <MyProvider value={store}>
        <BrowserRouter>
          <Menue></Menue>
          <MyRouting></MyRouting>
        </BrowserRouter>
      </MyProvider>
    </div>
  );
}

export default App;
