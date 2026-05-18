import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Theme = "dark" | "light";

interface UiState {
  theme: Theme;
  commandPaletteOpen: boolean;
  preloaderDone: boolean;
}

const initialState: UiState = {
  theme: "dark",
  commandPaletteOpen: false,
  preloaderDone: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload;
    },
    toggleCommandPalette(state) {
      state.commandPaletteOpen = !state.commandPaletteOpen;
    },
    setPreloaderDone(state, action: PayloadAction<boolean>) {
      state.preloaderDone = action.payload;
    },
  },
});

export const { setTheme, toggleCommandPalette, setPreloaderDone } = uiSlice.actions;
export default uiSlice.reducer;
