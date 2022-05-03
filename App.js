import { Provider } from "react-redux";

import Home from "./screens/Home";
import storeToolkit from "./redux/configureStoreToolkit";

export default function App() {
  return (
    <Provider store={storeToolkit}>
      <Home />
    </Provider>
  );
}
