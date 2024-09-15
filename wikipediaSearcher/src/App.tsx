import InputWord from './components/InputWord'
import Result from './components/Result'
import searchStore from "./store/SearchStore";

function App() {

  return (
    <>
      <div>
        <InputWord store={searchStore}/>
        <Result store={searchStore}/>
      </div>
    </>
  )
}

export default App
