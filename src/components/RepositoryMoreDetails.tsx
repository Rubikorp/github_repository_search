import React from "react";
import styled from "../styles/RepositoryMoreDetails.module.scss";

import { IoStarSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

import { Repository } from "../types/repoSliceTypes";

/*---------------import/\---------------*/

interface RepositoryMoreDetailsProps {
  selectedRepo: Repository;
}

const RepositoryMoreDetails: React.FC<RepositoryMoreDetailsProps> = ({
  selectedRepo,
}) => {
  const formatNumber = (number: number): string => {
    let strNumber = number.toString();
    return strNumber.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };
  console.log(selectedRepo);

  return (
    <div className={styled.container}>
      <h2 className={styled.head_repository}>{selectedRepo.name}</h2>
      <div className={styled.dsc_container}>
        <div className={styled.lng_and_dsc_container}>
          {selectedRepo.language ? (
            <p className={styled.language}>{selectedRepo.language}</p>
          ) : (
            ""
          )}
          <ul className={styled.topic_list}>
            {selectedRepo.topics.map((topic) => (
              <li className={styled.topic_list__item}>{topic}</li>
            ))}
          </ul>
        </div>
        <p className={styled.stars_container}>
          <span className={styled.stars}>
            <IoStarSharp className={styled.star_svg} />
            {formatNumber(selectedRepo.stargazers_count)}
          </span>
        </p>
      </div>
      <p className={styled.license}>{selectedRepo.license?.name || ""}</p> 
      <a className={styled.link} href={selectedRepo.html_url} target="_blank"  rel="noreferrer" title={selectedRepo.html_url}><FaGithub className={styled.svg_gth}/></a>
    </div>
  );
};

export default RepositoryMoreDetails;
