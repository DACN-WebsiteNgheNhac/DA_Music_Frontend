import { AnyAction, ThunkDispatch, combineReducers, configureStore } from '@reduxjs/toolkit';
import { audioReducer, musicReducer, searchReducer } from './slices';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const musicPersistConfig = {
   key: 'music',
   storage,
   blacklist: ['loading', 'isPlaying', 'showPlaylist'],
};

const audioPersistConfig = {
   key: 'audio',
   storage,
   blacklist: ['isSeek, currentTime'],
};

const rootReducer = combineReducers({
   search: searchReducer,
   audio: persistReducer(audioPersistConfig, audioReducer),
   music: persistReducer(musicPersistConfig, musicReducer),
});

const store = configureStore({
   reducer: rootReducer,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

export const persistor = persistStore(store);

export default store;
