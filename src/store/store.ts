import { flashcardsApi } from '@/api/cards-api'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    [flashcardsApi.reducerPath]: flashcardsApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(flashcardsApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
