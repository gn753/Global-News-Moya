import { Link } from "react-router-dom";
import Member from "./Member";
import NonMember from "./NonMember";
import { css } from "@emotion/react";
import Container from "@mui/material/Container";

const Header = () => {
  return (
    <div css={styles.sticky} id="header sticky--bar">
      <Container maxWidth="lg">
        <div css={styles.inner}>
          <Link to="/">
            <div css={styles.Logo}>로고</div>
          </Link>
          <NonMember></NonMember>
        </div>
      </Container>
    </div>
  );
};

export default Header;

const styles = {
  sticky: css`
    position: sticky;
    top: 0;
    right: 0;
    left: 0;
    z-index: 400;
    height: 68px;
    background-color: #fff;
    box-shadow: none;
  `,
  container: css`
    max-width: 1240px;
    margin: auto;
  `,
  inner: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 68px;
  `,
  Logo: css`
    width: 62.6px;
    height: 24px;
    background-image: url("/images/icon-Moya-logo.svg");
    background-size: cover;
    background-repeat: no-repeat;
    font-size: 0;
  `,
};
