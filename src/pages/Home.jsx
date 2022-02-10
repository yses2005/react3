import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  FullscreenWrapper,
  CustomLink,
  Loader,
  Button,
  Input,
} from "components";
import { logout } from "redux/actions/authActions";

import { fetchDogs } from "redux/actions/dogActions";

function Home() {
  const username = useSelector((s) => s.auth.username);
  const fetchingDogs = useSelector((s) => s.dog.fetchingDogs);
  const dogsList = useSelector((s) => s.dog.dogsList);

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);
  const [numOfDogs, setNumOfDogs] = useState(10);
  const [imgSize, setImgSize] = useState("sml");
  const [orderType, setOrderType] = useState("ASC");

  useEffect(
    function onMount() {
      if (username) {
        dispatch(
          fetchDogs({ page: currentPage, size: imgSize, order: orderType })
        );
      }
    },
    [currentPage]
  );

  function handleCurrentPageDecrement() {
    if (currentPage === 0) {
      return;
    }
    setCurrentPage(currentPage - 1);
  }

  function handleCurrentpageIncrement() {
    setCurrentPage(currentPage + 1);
  }

  function handleNumValueChange(e, valueCb) {
    const newValue = e.target.value;
    valueCb(newValue < 1 ? 1 : newValue);
  }

  function handleImgSizeChange(e, valueCb) {
    const newValue = e.target.value;
    valueCb(newValue);
  }

  function handleOrderTypeToggle() {
    setOrderType(orderType === "ASC" ? "DESC" : "ASC");
    dogsList.reverse();
  }

  function handleFormSubmit() {
    dispatch(logout());
  }

  return (
    <FullscreenWrapper>
      <h1>Doggo List</h1>
      <p className="m-bottom-4">
        {username
          ? `Welcome, ${username}!`
          : "To see a list of doggos, please log in first."}
      </p>
      {username ? (
        <div className="m-top-2">
          <form onSubmit={handleFormSubmit}>
            <div className="m-bottom-4">
              <Button label="Log Out" name="logOut" type="submit" />
            </div>
          </form>
          <div className="m-all-4">
            <label htmlFor="numOfDogs"> Number of Dogs </label>
            <Input
              type="number"
              className="input-field"
              min="1"
              name="numOfDogs"
              value="10"
              onChange={(e) => handleNumValueChange(e, setNumOfDogs)}
            />
          </div>
          <div className="m-bottom-4">
            <label htmlFor="imgSize">Image Size: </label>
            <select
              name="imgSize"
              onChange={(e) => handleImgSizeChange(e, setImgSize)}
            >
              <option value="sml">Small</option>
              <option value="med">Medium</option>
              <option value="lrg">Large</option>
            </select>
          </div>
          <div className="m-bottom-4">
            <Button
              label="<"
              name="decrement"
              className="m-right-2"
              onClick={handleCurrentPageDecrement}
              disabled={fetchingDogs}
            />
            <Button label={`${currentPage}`} disabled={true} />
            <Button
              label=">"
              name="increment"
              className="m-left-1"
              onClick={handleCurrentpageIncrement}
              disabled={fetchingDogs}
            />
          </div>
          <div>
            <Button
              label={orderType === "ASC" ? "Ascending" : "Descending"}
              name="orderType"
              className="m-bottom-4"
              onClick={handleOrderTypeToggle}
            />
          </div>
          {fetchingDogs ? (
            <Loader />
          ) : (
            <div className="m-top-2">
              {dogsList.slice(0, numOfDogs).map((dog) => (
                <div key={dog.id} style={{alignItems: "center"}}>
                  <img
                    src={dog.url}
                    className={`dog-img-${imgSize}`}
                    alt="doggo"
                  />
                  <p>{dog.breeds.length > 0 ? dog.breeds[0].name : "doggo"}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <CustomLink to="login" label="Log In" />
      )}
    </FullscreenWrapper>
  );
}

export default Home;
