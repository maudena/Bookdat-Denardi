import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/container/ItemListContainer';



function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Este es mi componente contenedor"/>
    </div>
  );
}

export default App;
