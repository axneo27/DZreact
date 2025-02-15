import './App.css';
import UserGreeting from './components/greeting/index';
import Button from './components/button';

function App() {

  return (
    <>
      <UserGreeting isLoggedIn={true}/>
      <Button type="confirm">Confirm</Button>
      <Button type="cancel">Cancel</Button>
      <Button type="">Primary</Button>
    </>
  );
}

export default App;
