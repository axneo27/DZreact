import style from './style.module.css';

const buttonStyle = {
    backgroundColor: "blue",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
}

function Button({type, children}) {
    switch(type) {
        case 'confirm':
            return (<><button className={style.confirm}>{children}</button></>);
        case 'cancel':
            return (<><button className={style.cancel}>{children}</button></>);
        default:
            return (<><button style={buttonStyle}>{children}</button></>);
    }
}

export default Button;