import React from 'react';
import {createStore,combineReducers,applyMiddleware} from 'redux'
import reducerSession from './../reducers/reducerSession'
import reducerActivities from './../reducers/reducerActivities'
import thunk from 'redux-thunk';
import { persistStore, persistReducer,autoRehydrate } from 'redux-persist'
import { REHYDRATE, PURGE, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { AsyncStorage } from 'react-native';

/**
 * Reducers para convertir estado de forma de aplicacion Global
 */
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: 5000,
}

const persistedReducer = persistReducer(persistConfig,
	combineReducers({        
        sessionStore:reducerSession,        
        activitiesStore: reducerActivities
    })
)

export const store = createStore(
	persistedReducer,    
    applyMiddleware(thunk),       
)

export const persistor = persistStore(store);
