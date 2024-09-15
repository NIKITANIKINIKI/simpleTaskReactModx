import React, { ChangeEvent } from "react";
import styles from "./InputWord.module.css";
import { observer } from "mobx-react-lite";
import { WikiSearchResult } from "../../store/SearchStore";

type StoreType=
  {
    params: string;
    results: WikiSearchResult[];
    loading: boolean;
    error: string;
    setParams(newParams: string): void;
    seacrhWiki(): Promise<void>;
  }


type InputWordProps = {
  store: StoreType
}
const InputWord: React.FC<InputWordProps> = ({store}) => {


  const handleInputChange=(e:ChangeEvent<HTMLInputElement>) =>{
    store.setParams(e.target.value)
  }

  const handleKeyPress=(e:React.KeyboardEvent<HTMLInputElement>  )=>{
    if (e.key === "Enter") {
      store.seacrhWiki();
    }
  }

  return (
    <div>
      <div className={styles.container}>
        <input
          type="text"
          value={store.params}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className={styles.input}
          placeholder="Введите слово..."
        />
        <button onClick={() => store.seacrhWiki()} className={styles.button}>Искать</button>
      </div>
    </div>
  );
};

export default observer(InputWord);
