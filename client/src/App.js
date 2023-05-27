import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import EntryPage from './components/main/EntryPage';
import DonutSelection from './components/main/DonutSelection';
import DeliveryAddress from './components/main/DeliveryAddress';
import OrderOverview from './components/main/OrderOverview';
import PageNotFound from './components/main/PageNotFound';

// root routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <EntryPage />
  },
  {
    path: '/donut-selection',
    element: <DonutSelection />
  },
  {
    path: '/delivery-address',
    element: <DeliveryAddress />
  },
  {
    path: '/order-overview',
    element: <OrderOverview />
  },
  {
    path: '*',
    element: <PageNotFound />
  },
]) 

function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
