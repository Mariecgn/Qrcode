import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

// Définir le type pour l'utilisateur
interface User {
  firstName: string;
  lastName: string;
}

// Initial state
const initialState: User = {
  firstName: '',
  lastName: '',
};

// Slice pour gérer les informations de l'utilisateur
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
  },
});

// Création du store
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export const { setUser } = userSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
