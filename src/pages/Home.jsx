import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FullscreenWrapper, CustomLink, Loader, Button, Input } from "components";

import { fetchDogs } from "redux/actions/dogActions";
import { useState } from "react";

function Home() {
  const username = useSelector(s => s.auth.username);
  const fetchingDogs = useSelector(s => s.dog.fetchingDogs);
  const dogsList = useSelector(s => s.dog.dogsList);

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(function onMount(){
    if (username){
      dispatch(fetchDogs({page: currentPage}));
    }
  }, [currentPage]);

  function handleCurrentPageDecrement() {
    if (currentPage === 0) {
      return;
    }

    setCurrentPage(currentPage -1);
  }

  function handleCurrentPageIncrement() {
    setCurrentPage(currentPage +1);
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
        </div>
      ) : (<CustomLink to="login" label="Log In" />)
      }
      {fetchingDogs ? <Loader /> : (
        <div>    
          {
            dogsList.map((dog) => (
              <img src={dog.url} className="dog-img" />
            ))
          }
        </div>
      )}
    </FullscreenWrapper>
  );
}

export default Home;
