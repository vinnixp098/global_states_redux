import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { AppRoutes } from "./routes/AppRoutes";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";

export function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          {/* componente navBar */}
        </div>
        <div>
          <div>
            {/* componente slideBar */}
          </div>
          <AppRoutes />
        </div>
        
      </PersistGate>
    </Provider>
  );
}
