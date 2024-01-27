
import './App.css';
import Practic from './components/Practic';
import EmailJsPractic from './components/EmailJsPractic';
import Hero from './components/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import Timer from './components/Timer';
import Coun from './components/Coun';
import Textanimate from './components/Textanimate';
import SpliderPractic from './components/SpliderPractic';
import Context from './components/Context';
// import NoteStates from './Context/notes/NoteStates';

function App() {
  return (
    <>
      {/* <NoteStates> */}
      <EmailJsPractic />
      <Practic />
      <Hero />
      <Timer />
      <Coun />
      <Textanimate />
      <SpliderPractic />
      <Context/>
      {/* </NoteStates> */}
    </>
  );
}

export default App;
