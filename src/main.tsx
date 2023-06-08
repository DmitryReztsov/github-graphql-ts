import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import router from './router.tsx';
import { RouterProvider } from 'react-router-dom';
import { IconContext } from "react-icons";
import { Helmet } from 'react-helmet';

import { store } from './store/store.ts';

import './styles/main.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <Helmet
      defaultTitle="Repository search app"
      titleTemplate="%s - Repository search app"
    />
    <IconContext.Provider value={{ className: "icons" }}>
      <RouterProvider router={router} />
    </IconContext.Provider>
  </Provider>,
)
