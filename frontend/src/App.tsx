import { Route, Routes } from 'react-router-dom';
import { Register } from './Components/Register';
import { Login } from './Components/Login';
import { Home } from './Components/Home';
import { MainPage } from './Components/MainPage';
import { PageNotFound } from './Components/PageNotFound';
import { useState } from 'react';
import { AppContext } from './AppContext';
import { Provider } from 'react-redux';
import store from './Store';
import { ModalComponent } from './Components/ModalComponent';
function App() {
  const [open, setOpen] = useState<Boolean>(false);
  const [close, setClose] = useState<Boolean>(false);
  const [index, setIndex] = useState<Number>(0);
  return (
    <>
      <Provider store={store}>
        <AppContext.Provider value={{ open, setOpen, close, setClose, index, setIndex }}>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/main" element={<MainPage />}></Route>
            <Route path="/model-check" element={<ModalComponent />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </AppContext.Provider>
      </Provider>
    </>
  );
}

export default App;
