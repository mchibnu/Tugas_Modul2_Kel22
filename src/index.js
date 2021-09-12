import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

import CardList from "./components/CardList";
import Gambar from "./assets/images/terry.png";
import Anggota from "./components/Anggota";

const data = [
  {
    nama: "Khusnul Khotimah",
    nim: "21120118120022",
    kelompok: "22",
  },
  {
    nama: "Muchammad Ibnu Maulana",
    nim: "21120118130046",
    kelompok: "22",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CardList 
      image={Gambar} 
      judul="Tugas Praktikum RPLBK"
      kelompok="22">
    </CardList>
    <Anggota
      header="Anggota Praktikum RPLBK"
      data={data}
      footer="Kelompok 22">
    </Anggota>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
