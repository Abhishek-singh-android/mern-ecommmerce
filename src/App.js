import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import {Route,Link,RouterProvider,createBrowserRouter} from "react-router-dom"
import SignupPage from './pages/SignupPage';

const router = createBrowserRouter([
  {
    path:'/',
    element:(<Home/>),
  },
  {
    path:'/login',
    element:(<LoginPage></LoginPage>),
  },
  {
    path:'/signup',
    element:(<SignupPage></SignupPage>),
  },

])



function App() {
  return (
    <div className="App">
      {/* <Home></Home>
      <LoginPage/> */}
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
