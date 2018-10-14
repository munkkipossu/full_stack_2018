import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osa1 = {
      nimi: 'Reactin perusteet',
      tehtavia: 10
    }
    const osa2 = {
      nimi: 'Tiedonvälitys propseilla',
      tehtavia: 7
    }
    const osa3 = {
      nimi: 'Komponenttien tila',
      tehtavia: 14
    }
  
    return (
      <div>
        <Otsikko kurssi={kurssi} />
        <Sisalto osa1={osa1} osa2={osa2} osa3={osa3} />
        <Yhteensa yhteensa={[osa1.tehtavia, osa2.tehtavia, osa3.tehtavia].reduce((a, b) => a + b, 0)} />
      </div>
    )
}
  
const Osa = (props) => (
    <div>
        <p>{props.osa.nimi} {props.osa.tehtavia}</p>
    </div>
)

const Otsikko = (props) => (
    <div>
        <p>{props.kurssi}</p>
    </div>
)

const Sisalto = (props) => (
    <div>
        <Osa osa={props.osa1} />
        <Osa osa={props.osa2} />
        <Osa osa={props.osa3} />
    </div>
)

const Yhteensa = (props) => (
    <div>
        <p>yhteensä {props.yhteensa} tehtävää</p>
    </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
