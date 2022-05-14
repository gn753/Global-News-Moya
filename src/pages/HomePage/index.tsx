import Intro from "@src/pages/HomePage/Intro";
import SearchForm from "@src/components/SearchForm";
import { css } from "@emotion/react";
import { Container } from "@mui/material";

export default function HomePage() {
  return (
    <main id="main" css={Homestyles}>
      <Container maxWidth="lg">
        <div className="inner">
          <Intro></Intro>
          <SearchForm />
        </div>
      </Container>
    </main>
  );
}

const Homestyles = css`
  background: linear-gradient(
    210.25deg,
    #ffffff -118.14%,
    #dff8f4 22.93%,
    #fdddd2 141.11%
  );
  padding-top: 132px;
  padding-bottom: 180px;

  .container {
    max-width: 1240px;
    margin: auto;
  }
  .inner {
    min-height: 100vh;
    margin: auto;
  }
`;
