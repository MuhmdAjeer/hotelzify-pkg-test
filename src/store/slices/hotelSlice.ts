import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiResponse } from "../../types/api";
import { HotelAPIResponse } from "../../types/hotel";
import apiService from "../../api/apiService";

export interface HotelState {
  hotel: HotelAPIResponse | null;
}

const initialState: HotelState = {
  hotel: null,
};

export const fetchHotel = createAsyncThunk<
  ApiResponse<HotelAPIResponse[]>,
  { websiteSlug: string }
>("fetch/hotel", async ({ websiteSlug }) => {
  return await apiService.fetchAvailability({
    websiteSlug,
    checkInDate: "2025-01-13",
    checkOutDate: "2025-01-16",
  });
});

export const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchHotel.fulfilled, (state, data) => {
      state.hotel = data.payload.data[0];
    });
  },
});

export const actions = hotelSlice.actions;

export default hotelSlice.reducer;
