import './App.css'
import { useContext, useEffect } from 'react'
import { ThemeContext } from './components/ThemeContext/index.jsx'
import ButtonTheme from './components/ButtonTheme/index.jsx';

function App3() {
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div className={theme}>
            <h1>App3</h1>
            <ButtonTheme />
        </div>
    );
}

export default App3;
