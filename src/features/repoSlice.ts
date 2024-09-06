import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RepositoriesState } from '../types/repoSliceTypes'

const initialState: RepositoriesState = {
	repositories: [],
	status: 'idle',
}

// Асинхронная функция для загрузки репозиториев
export const fetchRepositories = createAsyncThunk(
	'repositories/fetchRepositories',
	async (query: string) => {
		const response = await axios.get(
			`https://api.github.com/search/repositories?q=${query}`
		)
		return response.data.items
	}
)

const repositorySlice = createSlice({
	name: 'repositories',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchRepositories.pending, state => {
				state.status = 'loading'
			})
			.addCase(fetchRepositories.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.repositories = action.payload
			})
			.addCase(fetchRepositories.rejected, state => {
				state.status = 'failed'
			})
	},
})

export default repositorySlice.reducer
