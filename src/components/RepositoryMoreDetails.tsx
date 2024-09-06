import React from 'react'

interface RepositoryMoreDetailsProps {
  selectedRepo: {
    name: string,
    description: string,
    language: string,
    stargazers_count: number,
    forks_count: number,
    updated_at: string
  }
}

const RepositoryMoreDetails:React.FC<RepositoryMoreDetailsProps> = ({selectedRepo}) => {
  return (
    <div>
      <h2>Детали репозитория</h2>
            <p>
              <strong>Название:</strong> {selectedRepo.name}
            </p>
            <p>
              <strong>Описание:</strong> {selectedRepo.description}
            </p>
            <p>
              <strong>Язык:</strong> {selectedRepo.language}
            </p>
            <p>
              <strong>Число звёзд:</strong> {selectedRepo.stargazers_count}
            </p>
            <p>
              <strong>Число форков:</strong> {selectedRepo.forks_count}
            </p>
            <p>
              <strong>Дата обновления:</strong>{" "}
              {new Date(selectedRepo.updated_at).toLocaleDateString()}
            </p>
    </div>
  )
}

export default RepositoryMoreDetails
