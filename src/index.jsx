import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home'
import Counter from './components/Counter'
import ModalWindow from './components/ModalWindow'
import Quiz from './components/Quiz'
import Todo from './components/todo/Todo'
import TicTacToe from './components/ticTacToe/TicTacToe';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/modalWindow" element={<ModalWindow />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/ticTacToe' element={<TicTacToe />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </>
)