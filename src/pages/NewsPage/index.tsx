import { css } from "@emotion/react";
import NewsList from "@src/pages/NewsPage/NewsList";
import NewsSearchFormArea from "@src/pages/NewsPage/NewsSearchFormArea";
import { Container } from '@mui/material';

export default function NewsPage() {

  return (
    <main css={styles.main}>
      <NewsSearchFormArea />
      <Container maxWidth="lg">
        <NewsList />
      </Container>

    </main>
  );
}

const styles = {
  main: css`
    min-height: 100vh;
    height: 100%;
  `,
};
