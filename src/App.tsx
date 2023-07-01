import Footer from './components/Footer';
import Header from './components/Header';
import Contacto from './pages/Contacto';
import Dentistas from './pages/Dentistas';
import Favoritos from './pages/Favoritos';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import styles from './styles/App.module.scss';
import { Action, State  } from './types/reducer';
import { createContext, useReducer } from 'react';
import { reducer, initialState } from './services/reducer';
import useThemeMode from './hooks/useThemeMode';
import Details from './pages/Dentistas/details';

export const AppContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);


function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  useThemeMode(dispatch, state.darkMode)
  

  return (
    <>
      <AppContext.Provider value={{ state, dispatch }}>
        <Header />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dentistas/*" element={<Dentistas />} />
            <Route path="/dentistas/:id" element={<Details/>} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </main>
        <Footer />
      </AppContext.Provider>
    </>
  );
}
export default App
