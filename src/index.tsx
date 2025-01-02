import { createRoot } from 'react-dom/client'

import { Counter } from './components/Counter'
import { App } from './components/App'


createRoot(document.getElementById('root')!).render(<App />)