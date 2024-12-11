import { Provider } from "react-redux";
import "./App.css";
import Test from "./components/Test";
import { Hotelzify } from "hotelzify-common";

export const hotelzify = new Hotelzify({
  baseURL: "https://dev2-api.hotelzify.com",
});

function App() {
  return (
    <>
      <Provider store={hotelzify.store}>
        <Test />
      </Provider>
    </>
  );
}

export default App;
