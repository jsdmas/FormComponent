import BasicForm from './BasicForm';
import './styles.css';
import formstyle from './styles/formStyle.module.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <section style={{ display: 'flex', height: '100vh', width: '100%', padding: '0 40px' }} className={formstyle.form}>
      <BrowserRouter>
        <header style={{ display: 'flex', width: '100%', position: 'fixed' }}>
          <Link to='/basicform'>basicform</Link>
        </header>
        <Routes>
          <Route path='/basicform' element={<BasicForm />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
