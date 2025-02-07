import './App.css'
import H2 from './components/h2/h2'
import CoolImage from './components/coolImage/coolImage'
import InfoText from './components/infoText/infoText'
import CurrentTimeBlock from './components/currentTimeBlock/currentTimeBlock'

function App23() {
  return (
    <>
        <CurrentTimeBlock />
      <H2 text="Trofymchuk Oleksii Igorovych"/>
      <div className='personInfo'> 
        <style>
        {`
          .personInfo {
            display: flex;
            flex-direction: row;
          }
        `}
      </style>
        <CoolImage src="./me.jpeg" alt="Me" h="300px"/>
        <div style={
            {
                marginLeft: '20px'
            }
        }>
            <InfoText label="Phone number" value="+380681963338"/>
            <InfoText label="Email" value="astrofymchuk@gmail.com"/>
            <InfoText label="HomeTown" value="Rivne"/>
            <InfoText label="Work experience" value="almost zero"/>
            <InfoText label="Skills" value="videogames, chess, pizza enjoyer"/>
        </div>
      </div>
        
    </>
  )
}

export default App23;
