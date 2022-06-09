import styled from "@emotion/styled";
import { useState } from "react";
import { useFetchInfinityScroll } from "@src/features/NewsList/hooks/useFetchInfinityScroll";
import { css } from "@emotion/react";
import { useSearchParams } from "react-router-dom";
import Spinner from "@src/features/common/Spinner";
import NewsListFilter from "@src/features/NewsList/components/NewsListFilter";
import Container from "@material-ui/core/Container";
import TextCardList from "@src/features/NewsList/components/TextCardList";
import ImageCardList from "@src/features/NewsList/components/ImageCardList";

export default function NewsList() {
  const [isView, setIsView] = useState<boolean>(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const keyType = searchParams.get("keyType");
  const paramValue = searchParams.get("paramValue");
  const mediaType = searchParams.get("mediaType");
  const languages = searchParams.get("languages");
  const timeFilter = searchParams.get("timeFilter");
  const orderBy = searchParams.get("orderBy");
  const exchange: string | null | undefined =
    searchParams.get("exchange") || "";

  const { data, ref, status, hasNextPage, isFetchingNextPage, isSuccess } =
    useFetchInfinityScroll({
      keyType,
      paramValue,
      mediaType,
      languages,
      timeFilter,
      orderBy,
      exchange,
    });
  const handleImageCardListView = () => {
    setIsView(true);
  };
  const handleTextCardListView = () => {
    setIsView(false);
  };

  return (
    <Container maxWidth="lg">
      <div css={styles.wrap}>
        <NewsListFilter
          handleImageCardListView={handleImageCardListView}
          handleTextCardListView={handleTextCardListView}
        />
        <div>
          {status === "loading" ? (
            <p>Loading...</p>
          ) : status === "error" ? (
            <span>Error</span>
          ) : (
            <>
              {isView && isSuccess && <ImageCardList data={data} />}
              {!isView && isSuccess && <TextCardList data={data} />}
            </>
          )}
        </div>

        <div>
          {isFetchingNextPage ? (
            <Spinner />
          ) : (
            hasNextPage && <LoadMore ref={ref}>"Load Newer"</LoadMore>
          )}
        </div>
      </div>
    </Container>
  );
}

const styles = {
  wrap: css`
    min-height: calc(100vh - 345px);
    height: 100%;
  `,
};

const LoadMore = styled.div`
  height: auto;
`;
