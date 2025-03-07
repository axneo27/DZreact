import ScreenSize from "./components/ScreenSize";

const App4 = () => {
  const screenSize = ScreenSize();

  return (
    <div>
      <p>Width: {screenSize.width}</p>
      <p>Height: {screenSize.height}</p>
    </div>
  );
};

export default App4;