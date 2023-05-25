// import './App.css'
import NavBar from './Components/NavBar/NavBar';
import ListHeader from './Components/ItemContainerList/ItemContainerList';
import ItemContainerList from './Components/ItemContainerList/ItemContainerList';

  function App() {
    return (
      <div className="App">
        <NavBar />
        <ListHeader greeting={"Welcome"}/>
        <div>
        <ItemContainerList />
        </div>
      </div>
    );
  }
  
  export default App;
