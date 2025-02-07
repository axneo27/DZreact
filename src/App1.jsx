import './App.css'
import H2 from './components/h2/h2'
import CoolImage from './components/coolImage/coolImage'
import InfoText from './components/infoText/infoText'

function App1() {

  return (
    <>
      <H2 text="Interstellar"/>
      <CoolImage src="https://wallpapers.com/images/hd/interstellar-astronaut-cooper-on-ice-blxlb2krxcwjb2du.jpg" alt="Interstellar" h="500px"/>
      <InfoText label="Director" value="Christopher Nolan"/>
      <InfoText label="Year" value="2014"/>
      <InfoText label="Rating" value="8.6/10"/>
      <InfoText label="Film studio" value="Paramount Pictures"/>
    </>
  )
}

export default App1;
