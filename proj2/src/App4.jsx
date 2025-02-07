import './App.css'
import H2 from './components/h2/h2'
import CoolImage from './components/coolImage/coolImage'
import InfoText from './components/infoText/infoText'
import CurrentTimeBlock from './components/currentTimeBlock/currentTimeBlock'

export default function App4() {
    return (
        <>
            <CurrentTimeBlock />
          <H2 text="Hamster"/>
          <div className='personInfo'> 
            <style>
            {`
              .personInfo {
                display: flex;
                flex-direction: row;
              }
            `}
          </style>
            <CoolImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/European_hamster_%28Cricetus_cricetus%29_Meidling.jpg/1920px-European_hamster_%28Cricetus_cricetus%29_Meidling.jpg" alt="hamster" h="300px"/>
            <div style={
                {
                    marginLeft: '20px'
                }
            }>
                <InfoText label="Phone number" value="+9999999"/>
                <InfoText label="Email" value="hamster2004@gmail.com"/>
                <InfoText label="HomeTown" value="Los Angeles"/>
                <InfoText label="Work experience" value="20 years"/>
                <InfoText label="Skills" value="rocket propulsion turbopump engineer"/>
                <InfoText label="Additional Info" value="Hamsters are typically stout-bodied, with tails shorter than body length, and have small, furry ears, short, stocky legs, and wide feet. They have thick, silky fur, which can be long or short, colored black, grey, honey, white, brown, yellow, red, or a mix, depending on the species."/>
            </div>
          </div>
            
        </>
      )
}