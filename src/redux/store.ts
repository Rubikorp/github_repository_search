import { configureStore } from '@reduxjs/toolkit'
import repoReduser from '../features/repoSlice'

export const store = configureStore({
	reducer: {
		repos: repoReduser,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
