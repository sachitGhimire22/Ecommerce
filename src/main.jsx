import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')).render(
<Auth0Provider
    domain="dev-xpwqzt5tf1edwlia.us.auth0.com"
    clientId="7j85s3CN8im8e6XYfQ0Rqae5OXP8eQcd"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)
