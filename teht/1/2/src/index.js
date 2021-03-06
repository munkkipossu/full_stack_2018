import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto 
        osa1={osa1}
        tehtavia1={tehtavia1}
        osa2={osa2}
        tehtavia2={tehtavia2}
        osa3={osa3}
        tehtavia3={tehtavia3}
      />
      <Yhteensa yhteensa={tehtavia1 + tehtavia2 + tehtavia3} />
    </div>
  )
}

const Osa = (props) => (
    <div>
        <p>{props.osa} {props.tehtavia}</p>
    </div>
)

const Otsikko = (props) => (
    <div>
        <p>{props.kurssi}</p>
    </div>
)
const Sisalto = (props) => (
    <div>
        <Osa osa={props.osa1} tehtavia={props.tehtavia1} />
        <Osa osa={props.osa2} tehtavia={props.tehtavia2} />
        <Osa osa={props.osa3} tehtavia={props.tehtavia3} />
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
