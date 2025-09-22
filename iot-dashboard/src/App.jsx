import { BrowserRouter } from 'react-router-dom';
import Container from './components/Container';

function App() {


  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Container />
      </BrowserRouter>
    </div>
  );
}

export default App;