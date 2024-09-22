import React from 'react'
import {Repository} from "../types/repoSliceTypes"
import styled from "../styles/RepositoryMoreDetails.module.scss"


interface RepositoryMoreDetailsProps {
  selectedRepo: Repository
}

const RepositoryMoreDetails:React.FC<RepositoryMoreDetailsProps> = ({selectedRepo}) => {
  return (
    <div className={styled.container}>
            <h2 className={styled.head_repository}>
              {selectedRepo.name}
            </h2>
            <p>
              <strong>Язык:</strong> {selectedRepo.language}
            </p>
            <p>
              <strong>Число звёзд:</strong> {selectedRepo.stargazers_count}
            </p>
            <p className={styled.license}>{selectedRepo.license?.name || ''}</p>
    </div>
  )
}

export default RepositoryMoreDetails
