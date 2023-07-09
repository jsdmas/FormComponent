import BasicForm from './BasicForm';
import BasicFormWithContext from './BasicFormWithContext';
import './styles.css';
import formstyle from './styles/style.module.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <section style={{ display: 'flex', height: '100vh', width: '100%', padding: '0 40px' }} className={formstyle.form}>
      <BrowserRouter>
        <header style={{ display: 'flex', width: '100%', position: 'fixed' }} className={formstyle.a}>
          <Link to='/basicform'>basicform</Link>
          <Link to='/context'>BasicFormWithContext</Link>
        </header>
        <Routes>
          <Route path='/basicform' element={<BasicForm />} />
          <Route path='/context' element={<BasicFormWithContext />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
