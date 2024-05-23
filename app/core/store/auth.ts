import { mockUsers } from '@/core/utils/mock';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, User } from '@/core/utils/types';

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  message: null,
};

export const authenticateUser = createAsyncThunk<User, { email: string, password: string }>(
  'auth/authenticateUser',
  async ({ email, password }) => {
    const user = mockUsers.find((u) => u.email === email && u.password === password);
    if (user) {
      return user;
    } else {
      throw new Error('Invalid email or password');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticateUser.pending, (state) => {
        state.loading = true;
        state.message = null;
      })
      .addCase(authenticateUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.loading = false;
        state.message = null;
      })
      .addCase(authenticateUser.rejected, (state, action) => {
        state.loading = false;
        state.message = { message: `Invalid User Credentials`, type: 'error' };
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
