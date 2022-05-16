import { css } from "@emotion/react";
import NewsList from "@src/features/NewsList";
import NewsSearchFormArea from "@src/pages/NewsPage/NewsSearchFormArea";

export default function NewsPage() {
  return (
    <main css={styles.main}>
      <NewsSearchFormArea />
      <NewsList />
    </main>
  );
}

const styles = {
  main: css``,
};
