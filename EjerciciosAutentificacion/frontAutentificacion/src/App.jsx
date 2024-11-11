
import Router from './app/Router';
import Home from './pages/Login';
import {useUserContext} from './providers/UserProvider'

const App = () => {
  const {user}= useUserContext();
 return (
    <div>
{user ? <Router />:<Home/>}
</div>
 )
}
export default App;
