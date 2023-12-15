import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import App_v2 from './components/pages/App_v2.tsx'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
			<App_v2 />
		</QueryClientProvider>
  </React.StrictMode>,
)
