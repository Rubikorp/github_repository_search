interface Repository {
	id: number
	name: string
	full_name: string
	language: string
	forks_count: number
	stargazers_count: number
	updated_at: string
	description: string
	license: {
		name: string
	} | null
}

interface RepositoriesState {
	repositories: Repository[]
	status: 'idle' | 'loading' | 'succeeded' | 'failed'
}

export type { Repository, RepositoriesState }
