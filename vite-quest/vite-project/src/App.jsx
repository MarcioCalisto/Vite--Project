import { useState } from 'react';
import './App.css'

function App() {
  const [dado, setDado] = useState({
    nome: "Márcio",
    especie: "Humano",
    genero: "M",
  })

  const [dadosAPI, setDadosAPI] = useState([
    dado, {
      nome: "Jubileu",
      especie: "Humano",
      genero: "M"
    }, {
      nome: "Dani",
      especie: "Humano",
      genero: "M"
    }
  ])

  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{dado.nome}</td>
            <td>{dado.especie}</td>
            <td>{dado.genero}</td>
          </tr>
          {
            dadosAPI.map((dado, index) => {
              return (
                <tr>
                  <th scope="row">{index}</th>
                  <td>{dado.nome}</td>
                  <td>{dado.especie}</td>
                  <td>{dado.genero}</td>
                </tr>)
            })
          }
          <tr>
            <th scope="row">3</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default App
