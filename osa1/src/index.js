import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const kurssi = {
      nimi: 'Half Stack -sovelluskehitys',
      osat: [
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
    }
  
    return (
      <div>
        <Otsikko kurssi={kurssi} />
        <Sisalto kurssi={kurssi} />
        <Yhteensa kurssi={kurssi} />
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
        <p>{props.kurssi.nimi}</p>
    </div>
)

const Sisalto = (props) => (
    <div>
        <Osa osa={props.kurssi.osat[0]} />
        <Osa osa={props.kurssi.osat[1]} />
        <Osa osa={props.kurssi.osat[2]} />
    </div>
)

const Yhteensa = (props) => (
    <div>
        <p>yhteensä {props.kurssi.osat.map(osa => osa.tehtavia).reduce((a, b) => a + b, 0)} tehtävää</p>
    </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
