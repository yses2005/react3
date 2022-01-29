import { FullscreenWrapper, CustomLink } from "components";

function PageNotFound() {
  return (
    <FullscreenWrapper>
      <h1 className="m-bottom-4">404 PAGE NOT FOUND</h1>
      <CustomLink to="/" label="Go to Home" />
    </FullscreenWrapper>
  );
}

export default PageNotFound;
