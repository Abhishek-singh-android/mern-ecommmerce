import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import CartPage from './pages/CartPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Checkout from './pages/Checkout';
import Protected from './features/auth/components/Protected';

// changes in Login ,signup,Cart,CheckoutPage

// command to run json server->  json-server --watch data.json --port 8000

const router = createBrowserRouter([
  {
    path: '/',
    element:
    // <Protected> 
    <Home></Home>
    //  </Protected>,
  },
  {
    path: '/login',
    element:<LoginPage></LoginPage>,
  },
  {
    path: '/signup',
    element: <SignupPage></SignupPage>,
  },
  { 
    path: '/cart',
    element: <Protected><CartPage></CartPage></Protected>,
  },
  { 
    path: '/checkout',
    element: <Protected><Checkout></Checkout></Protected>,
  },
  { 
    path: '/product-detail/:id',
    element: 
    // <Protected>
    <ProductDetailPage></ProductDetailPage>
    // </Protected>,
  },
]);

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
