import ReactDOM from 'react-dom/client'
import { router } from './routes'
import React from 'react'
import './assets/style.css'
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider 
} from '@apollo/client'
import { RouterProvider } from "react-router-dom"

const client = new ApolloClient({
  uri: 'https://wpe-hiring.tokopedia.net/graphql',
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
)
