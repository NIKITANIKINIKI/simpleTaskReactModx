import { makeAutoObservable } from "mobx";
import axios from "axios";


export interface WikiSearchResult {
    ns: number;
    title: string;
    pageid: number;
    size: number;
    wordcount: number;
    snippet: string;
    timestamp: string;
  }

class SearchStore {
  params: string = "";
  results: WikiSearchResult[] = [];
  loading: boolean = false;
  error: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  setParams(newParams: string) {
    this.params = newParams;
  }

  async seacrhWiki() {
    if (!this.params) return;

    this.loading = true;
    this.results = [];
    this.error = "";

    try {
      const response = await axios.get<{
        query: { search: WikiSearchResult[] };
      }>(
        `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${this.params}`
      );
      this.results = response.data.query.search;
    } catch (error) {
      this.error = "Ошибка при запросе данных.";
    } finally {
      this.loading = false;
    }
  }
}

const searchStore = new SearchStore();
export default searchStore;
