import React, { useState } from "react";
import { useAppSelector } from "./redux/hooks";

import { Repository } from "./types/repoSliceTypes";

import RepositoryTable from "./components/RepositoryTable";
import SearchComponent from "./components/SearchComponent";
import Footer from "./components/Footer";
import RepositoryMoreDetails from "./components/RepositoryMoreDetails";

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
        <div className={styles.repositoryTable}>
          <RepositoryTable
            repositories={repositories}
            onSelect={setSelectedRepo}
          />
           {selectedRepo ? <RepositoryMoreDetails selectedRepo={selectedRepo}/> : <div className={styles.detailsHello}>Выберите репозитарий</div> }
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
