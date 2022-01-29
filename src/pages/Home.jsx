import { FullscreenWrapper, CustomLink } from "components";

function Home() {
  const userName = null;

  return (
    <FullscreenWrapper>
      <h1>Doggo List</h1>
      <p className="m-bottom-4">
        {userName
          ? `Welcome, ${userName}!`
          : "To see a list of doggos, please log in first."}
      </p>
      <CustomLink to="login" label="Log In" />
    </FullscreenWrapper>
  );
}

export default Home;
