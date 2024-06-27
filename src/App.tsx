import { Provider } from 'react-redux'

import { Router } from '@/route'
import { store } from '@/store/store'

export function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
