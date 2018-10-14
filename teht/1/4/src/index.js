import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osat = [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  
    return (
      <div>
        <Otsikko kurssi={kurssi} />
        <Sisalto osat={osat} />
        <Yhteensa osat={osat} />
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
        <Osa osa={props.osat[0]} />
        <Osa osa={props.osat[1]} />
        <Osa osa={props.osat[2]} />
    </div>
)

const Yhteensa = (props) => (
    <div>
        <p>yhteensä {props.osat.map(osa => osa.tehtavia).reduce((a, b) => a + b, 0)} tehtävää</p>
    </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
