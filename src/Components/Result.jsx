import React, { useEffect, useState, useContext, lazy, Suspense } from "react";
import Axios from "axios";
import { GlobalContext } from "./stateReducer/GlobalProvider";
import Masonry from "react-masonry-css";
import "./css/Result.css";

const Card = lazy(() => import("./Card"));
const Result = () => {
  const [data, setData] = useState([]);
  const { state, dispatch } = useContext(GlobalContext);

  const getImg = async (query, page) => {
    if (!query) query = "random";
    const res = await Axios.get(
      `https://api.unsplash.com/search/collections?page=${page}&query=${query}&client_id=xsiFudxVXM2elMOrrpbl1EJ6EAg6VKOu3s7AGOfXhoA`
    );
    console.log(res.data.results);
    setData(res.data.results);
  };

  useEffect(() => {
    getImg(state.searchQuery, state.page);
  }, [state.toggle, state.page, state.searchQuery]);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <div className="container my-3 py-2" id="top">
      <h4 className="py-2 text-center mb-5">
        Your search images : "{state.searchQuery}"
      </h4>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data?.map((value, index) => {
          return (
            <div key={index}>
              <Suspense fallback={<div>Loading...</div>}>
                <Card
                  image={value.cover_photo.urls.raw}
                  thumb={value.cover_photo.urls.small}
                />
              </Suspense>
            </div>
          );
        })}
      </Masonry>

      <div className="row justify-content-center mt-3">
        <div className="col-sm-4 col-md-2 text-center">
          <div className="btn-grp d-flex justify-content-between shadow ">
            <button
              className="btn "
              onClick={() => {
                if (state.page !== 1) {
                  dispatch({
                    type: "DEC_PAGE",
                  });
                }
                window.scrollTo(0, 150);
              }}
            >
              prev
            </button>
            <button className="btn" disabled>
              {state.page}
            </button>
            <button
              className="btn"
              onClick={() => {
                dispatch({
                  type: "INC_PAGE",
                });
                window.scrollTo(0, 150);
              }}
            >
              next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
