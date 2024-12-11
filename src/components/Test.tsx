// import {
//   useAppDispatch,
//   useTypedSelector,
// } from "hotelzify-common/src/hooks/store";
// import { fetchHotel } from "hotelzify-common/";

import { useAppDispatch, useTypedSelector } from "hotelzify-common";
import { hotelzify } from "../App";

const Test = () => {
  const dispatch = useAppDispatch();
  const { hotel } = useTypedSelector((state) => state.hotel);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            hotelzify.hotelStore.fetchHotel({
              websiteSlug: "srinis",
              checkInDate: "2024/12/11",
              checkOutDate: "2024/12/15",
            })
          );
        }}
      >
        click
      </button>

      <h1>{hotel?.id}</h1>
      <h1>{hotel?.name}</h1>
    </div>
  );
};

export default Test;
