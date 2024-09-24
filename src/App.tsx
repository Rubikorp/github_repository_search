import React, { useState } from "react";
import { useAppSelector } from "./redux/hooks";

import { Repository } from "./types/repoSliceTypes";

import RepositoryTable from "./components/RepositoryTable";
import SearchComponent from "./components/SearchComponent";
import Footer from "./components/Footer";
import RepositoryMoreDetails from "./components/RepositoryMoreDetails";
import HiComponent from "./components/HiComponent";

import styles from "./styles/App.module.scss";

const App: React.FC = () => {
  const repositories = useAppSelector((state) => state.repos.repositories);
  const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null);

  return (
    <div className={styles.app}>
      <div className={styles.mainContent}>
        <header>
          <SearchComponent />
        </header>
        {repositories.length !== 0 ? (
          <div className={styles.repositoryTable}>
            <RepositoryTable
              repositories={repositories}
              onSelect={setSelectedRepo}
            />
            {selectedRepo ? (
              <RepositoryMoreDetails selectedRepo={selectedRepo} />
            ) : (
              <div className={styles.detailsHello}>Выберите репозитарий</div>
            )}
          </div>
        ) : (
          <HiComponent />
        )}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
