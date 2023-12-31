import { AnyAction, ThunkDispatch, combineReducers, configureStore } from '@reduxjs/toolkit';
import {
   appReducer,
   audioReducer,
   musicReducer,
   searchReducer,
   userReducer,
   youtubeReducer,
} from './slices';
import storage from 'redux-persist/lib/storage';
import storageSession from 'redux-persist/lib/storage/session';
import { persistReducer, persistStore } from 'redux-persist';

const userPersistConfig = {
   key: 'user',
   storage,
   blacklist: ['playlists', 'favorites', 'loading', 'updateLoading'],
};

const musicPersistConfig = {
   key: 'music',
   storage,
   blacklist: ['loading', 'isPlaying', 'showPlaylist'],
};

const audioPersistConfig = {
   key: 'audio',
   storage,
   blacklist: ['isSeek', 'currentTime'],
};

const searchPersistConfig = {
   key: 'search',
   storage: storageSession,
   blacklist: ['loading', 'value', 'result'],
};

const youtubePersistConfig = {
   key: 'youtube',
   storage: storageSession,
   blacklist: ['loading', 'value', 'result'],
};

const rootReducer = combineReducers({
   app: appReducer,
   search: persistReducer(searchPersistConfig, searchReducer),
   youtube: persistReducer(youtubePersistConfig, youtubeReducer),
   user: persistReducer(userPersistConfig, userReducer),
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
