import { css } from "@emotion/react";
import { Container } from '@mui/material';

export default function NewsTabList() {
  return (
    <Container maxWidth="lg">
      <div css={styles.tabList}>
        <NewsTabItem />
      </div>
    </Container>
  );
}

function NewsTabItem() {
  return (
    <div css={styles.tabItem}>
      <span css={styles.text}>뉴스 키워드</span>
    </div>
  );
}

const styles = {
  tabList: css`
    position: absolute;
    bottom: 0%;
    margin: auto;
  `,
  tabItem: css`
    background: #48c0b7;
    border-radius: 5px 0px 0px 0px;
    cursor: pointer;
  `,
  text: css`
    display: block;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 12px;
    padding-bottom: 12px;
    color: #fff;
  `,
};
