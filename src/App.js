import Box from "./components/Box";
import Element from "./components/Element";

function App() {
  return (
    <div className="container">
      <Box id="box-1">
        <Element />
      </Box>
      <Box id="box-2"></Box>
      <Box id="box-3" />
      <Box id="box-4" />
    </div>
  );
}

export default App;
