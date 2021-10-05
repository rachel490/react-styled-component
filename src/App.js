import Header from './components/header';
import ItemList from './components/itemList';
import Footer from './components/footer';
import Modal from './components/modal';

function App() {
  return (
    <div className="App">
      <Header />
      <ItemList/>
      <Modal />
      <Footer/>
    </div>
  );
}

export default App;
