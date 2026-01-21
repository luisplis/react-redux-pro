import { createSlice } from "@reduxjs/toolkit";
import * as imgs from './Images';

export const avSlice = createSlice({
  name: "av",
  initialState: [
        {
        img: imgs.imgProyector,
        name: "Projectors",
        cost: 200,
        quantity: 0,
    },
    {
        img: imgs.imgAltavoces,
        name: "Speaker",
        cost: 35,
        quantity: 0,
    },
    {
        img: imgs.imgMicrofono,
        name: "Microphones",
        cost: 45,
        quantity: 0,
    },
    {
        img: imgs.imgPizarra,
        name: "Whiteboards",
        cost: 80,
        quantity: 0,
    },

    {
        img: imgs.imgSenales,
        name: "Signage",
        cost: 80,
        quantity: 0,
    },
  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
      if (state[action.payload]) {
        state[action.payload].quantity++;
      }
    },
    decrementAvQuantity: (state, action) => {
      if (state[action.payload] && state[action.payload].quantity > 0) {
        state[action.payload].quantity--;
      }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
