import { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from '@firebase/auth';

import { Context } from './Context/ContextProvider';
import Authentications from './Components/Authentications/Authentications';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const [context, setContext] = useContext(Context);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(getAuth(), user => {
      if (user?.email) {
        setContext({
          ...context,
          user: user
        })
        setLoading(false)
      }
      else {
        setContext({
          ...context,
          user: null
        })
        setLoading(false)
      }
    })
  }, [])

  if (loading) return null;
  return (

    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Authentications} />
        <Route exact path='/signup' component={Authentications} />
      </Switch>
    </Router>

  );
}

export default App;
