import React, { useState } from 'react'
import { useAppSelector } from './redux/hooks'

import { Repository } from './types/repoSliceTypes'

import RepositoryTable from './components/RepositoryTable'
import RepositoryDetails from './components/RepositoryDetails'
import styles from './styles/App.module.scss'

const App: React.FC = () => {
	const repositories = useAppSelector(state => state.repos.repositories)
	const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null)

	return (
		<div className={styles.app}>
			<h1>Поиск репозиториев GitHub</h1>
			<div className={styles.repositoryTable}>
				<RepositoryTable
					repositories={repositories}
					onSelect={setSelectedRepo}
				/>
			</div>
			<div className={styles.repositoryDetails}>
				<RepositoryDetails repository={selectedRepo} />
			</div>
		</div>
	)
}

export default App
