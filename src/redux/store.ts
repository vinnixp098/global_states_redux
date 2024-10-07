import { combineSlices, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import UserReducer from "./slices/UserReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppReducer from "./slices/AppReducer";

const reduxPersistActions = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER];

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["appPersist"],
};

const rootReducer = combineSlices({
  auth: UserReducer,
  app:  AppReducer,
});

const persistedScreenReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedScreenReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [...reduxPersistActions],
      },
    }),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export { persistor, store };
