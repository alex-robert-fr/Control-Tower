import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import ManagerLine from './components/molecules/ManagerLine.tsx'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
			<ManagerLine id_project_manager={1} />
		</QueryClientProvider>
  </React.StrictMode>,
)
