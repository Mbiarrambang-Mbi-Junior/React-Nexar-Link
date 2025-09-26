import { BrowserRouter } from 'react-router-dom';
import Container from './components/Container';

function App({ toggleDarkMode, isDarkMode }) {
  

  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Container toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      </BrowserRouter>
    </div>
  );
}

export default App;