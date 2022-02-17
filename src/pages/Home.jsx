import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FullscreenWrapper, CustomLink, Loader, Button, Input, Select } from "components";
import { logout } from "redux/actions/authActions";

import { fetchDogs } from "redux/actions/dogActions";
import { waitForDomChange } from "@testing-library/react";

function Home() {
  const username = useSelector(s => s.auth.username);
  const fetchingDogs = useSelector(s => s.dog.fetchingDogs);
  const dogsList = useSelector(s => s.dog.dogsList);

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);
  const [photoLimit, setPhotoLimit] = useState(10);
  const [ascending, setAscending] = useState(true);
  const [selection, setSelection] = useState("thumb");

  useEffect(function onMount(){
    if (username){
      dispatch(fetchDogs(
        {
          page: currentPage, 
          limit: photoLimit,
          order: ascending ? "ASC" : "DESC"
        }
      ));
    }
  }, [currentPage, ascending, selection]);

  function handleValueChange(e, valueCb) {
    const newValue = e.target.value;
    valueCb(newValue);
  }

  function handleCurrentPageDecrement() {
    if (currentPage === 0) {
      return;
    }

    setCurrentPage(currentPage -1);
  }

  function handleCurrentPageIncrement() {
    setCurrentPage(currentPage +1);
  }

  function handleOrderChange() {
    setAscending(!ascending);
  }

  function handleLogout() {
    dispatch(logout());
  }

  function handleSelectChange(e, valueCb) {
    console.log("selection changed")
    const newValue = e.target.value;
    valueCb(newValue);
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
        <div className="m-bottom-4">
          <Button 
          label="<" 
          className="m-right-1" 
          disabled={fetchingDogs}
          onClick={handleCurrentPageDecrement} 
          />
          <Button label={currentPage} />
          <Button 
          label=">" 
          className="m-left-1" 
          disabled={fetchingDogs}
          onClick={handleCurrentPageIncrement} 
          />
          <div>
            <Input
              type="text"
              name="limit"
              placeholder="Photo limit"
              className="m-all-2"
              onChange={(e) => handleValueChange(e, setPhotoLimit)}
            />
            
            <select
              onChange={(e) => handleSelectChange(e, setSelection)}
              action="/"
              >
              <option selected value="thumb" key="thumb">thumb</option>
              <option value="small" key="small">small</option>
              <option value="med" key="med">med</option>
              <option value="full" key="full">full</option>
            </select>

              <Button 
                label={ascending ? "ASC" : "DESC"} 
                className="m-all-1" 
                disabled={fetchingDogs}
                onClick={handleOrderChange} 
              />
          </div>
          <Button 
            label="Logout"
            className="m-all-1" 
            onClick={handleLogout} 
          />
        </div>
      ) : (<CustomLink to="login" label="Log In" />)
      }
      {username ? ((fetchingDogs) ? <Loader /> : (
        <div>    
          {
            dogsList.map((dog) => (
              <div className="m-bottom-4">
                <img className={selection} src={dog.url}  />
                <label>
                  {dog.breeds[0] ? dog.breeds[0].name : "Doggo"}
                </label>
              </div>
            ))
          }
        </div>
      )): null}
    </FullscreenWrapper>
  );
}

export default Home;
