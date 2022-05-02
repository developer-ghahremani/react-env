import Pages from "pages";
import { Provider } from "react-redux";
import store from "store";

const App = () => {
  return (
    <Provider store={store}>
      <Pages />
    </Provider>
  );
};

export default App;
