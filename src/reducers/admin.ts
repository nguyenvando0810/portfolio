import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Item {
  id: string;
  component: string;
  props: { text: string; message?: string };
}

export interface AdminData {
  data: Array<Item>;
  dataTemp: Array<Item>;
}

const initialState: AdminData = {
  data: [],
  dataTemp: [],
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setData: (state: AdminData, action: PayloadAction<Item>) => {
      state.data = [...state.data, action.payload];
    },
    setDataTemp: (state: AdminData, action: PayloadAction<Item>) => {
      const indexItemSelected = state.dataTemp.findIndex(
        (el) => el.id === action.payload.id
      );

      if (indexItemSelected === -1) {
        state.dataTemp = [...state.dataTemp, action.payload];
      } else {
        state.dataTemp = [
          ...state.dataTemp.slice(0, indexItemSelected),
          action.payload,
          ...state.dataTemp.slice(indexItemSelected + 1),
        ];
      }
    },
    saveData: (state: AdminData) => {
      state.data = [...state.dataTemp];
    },
    reset: () => initialState,
  },
});

export const { setData, setDataTemp, saveData } = adminSlice.actions;

export const AdminReducer = adminSlice.reducer;
