import React from 'react'
import { Repository } from '../types/repoSliceTypes'

interface RepositoryDetailsProps {
	repository: Repository | null
}

const RepositoryDetails: React.FC<RepositoryDetailsProps> = ({
	repository,
}) => {
	if (!repository) {
		return <div>Выберите репозиторий для отображения деталей</div>
	}

	return (
		<div>
			<h2>{repository.name}</h2>
			<p>{repository.description}</p>
			<p>Лицензия: {repository.license?.name || 'Нет'}</p>
		</div>
	)
}

export default RepositoryDetails
