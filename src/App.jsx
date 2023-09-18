import './App.css'
import LifeChart from './components/LifeChart/LifeChart'
import NavBar from './components/NavBar/NavBar'
import Picharts from './components/PiCharts/Picharts'
import PriceOption from './components/PriceOption/PriceOption'
// import DaisyUi from './components/DasyUi/DaisyUi'

function App() {

  return (
    <>      
      <h1>Here is task is practics and give us some data</h1>
      {/* <DaisyUi></DaisyUi> */}
      <NavBar></NavBar>
      <PriceOption></PriceOption>
      <LifeChart></LifeChart>
      <Picharts></Picharts>
    </>
  )
}

export default App
