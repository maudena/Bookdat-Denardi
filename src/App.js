import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/container/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Este es mi componente contenedor"/>
    </div>
  );
}

export default App;
