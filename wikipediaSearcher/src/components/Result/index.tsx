import React from 'react';
import { observer } from 'mobx-react-lite';
import styles from './Resuls.module.css'; 
import { WikiSearchResult } from '../../store/SearchStore';

type ResultProps = {
  store: {
    results: WikiSearchResult[];
    loading: boolean;
    error: string;
  }
};

const Result: React.FC<ResultProps> = ({ store }) => {
  const { results, loading, error } = store;

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>{error}</div>;
  if (results.length === 0) return <div className={styles.noResults}>No results found.</div>;

  return (
    <ul className={styles.resultList}>
      {results.map((result) => (
        <li key={result.pageid} className={styles.resultItem}>
          <a
            href={`https://en.wikipedia.org/?curid=${result.pageid}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resultTitle}
          >
            {result.title}
          </a>
          <p className={styles.resultSnippet} dangerouslySetInnerHTML={{ __html: result.snippet }} />
        </li>
      ))}
    </ul>
  );
};

export default observer(Result);
