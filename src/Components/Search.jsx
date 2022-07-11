import React, { useState, useContext } from "react";
import "./css/Search.css";
import { GlobalContext } from "./stateReducer/GlobalProvider";
import { useHistory } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const { state, dispatch } = useContext(GlobalContext);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SEARCH_QUERY",
      payload: query,
    });
    dispatch({
      type: "SET_INITIAL",
      payload: 1,
    });

    history.push("/result");
  };
  return (
    <div className="container mt-n2">
      <div className="row py-3 text-center justify-content-center">
        <div className=" col-sm-8 col-md-7 col-md-6 ">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter keyword"
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                required
              />
              <div className="input-group-append">
                <button type="submit" className="btn btn-success">
                  search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
