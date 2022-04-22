import { FullscreenWrapper, CustomLink, Loader,Button } from "components";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {useSelector} from 'react-redux'
import {fetchDogs} from 'redux/actions/dogActions'
function Home() {
  const userName = useSelector(s => s.auth.username);
  const fetchingDogs = useSelector(s => s.dog.fetchingDogs)
  const dogsList = useSelector(s => s.dog.dogsList)
  const dispatch = useDispatch()

  const [currentPage, setCurrentPage] = useState(0)

  useEffect(function onMount()
  {
    if (userName)
      dispatch(fetchDogs({page: currentPage}))
  },
  [currentPage])

  function handleCurrentPageDecrement()
  {
    if(currentPage === 0)
      return
    
    setCurrentPage(currentPage - 1)
  }

  function handleCurrentPageIncrement()
  {

    setCurrentPage(currentPage + 1)
  }
  return (
    <FullscreenWrapper>
      <h1>Doggo List</h1>
      <p className="m-bottom-4">
        {userName
          ? `Welcome, ${userName}!`
          : "To see a list of doggos, please log in first."}
      </p>
     {userName? null:<CustomLink to="login" label="Log In" />}
     {fetchingDogs? <Loader/>:
     <div>
       {userName && <div>
         <Button label ="<" className="m-right-2" onClick={handleCurrentPageDecrement} disabled={fetchingDogs}/>
         <Button label={currentPage} disabled/>
         <Button label =">" className="m-left-2" onClick={handleCurrentPageIncrement} disabled={fetchingDogs}/>
         <div className="m-bottom-4"/>
       </div>}
       <div style = {{display:'flex'}}>
       {
         
         dogsList.map(dog =>
          {
           return <img className="dogImg" src = {dog.url}/>
          })
          
       }
       </div>
     </div>
     }
    </FullscreenWrapper>
  );
}

export default Home;
