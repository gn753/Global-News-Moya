import NewsListFilter from "@src/pages/NewsPage/NewsList/NewsListFilter";
import ImageCardList from "@src/pages/NewsPage/NewsList/ImageCardList";
import TextCardList from "@src/pages/NewsPage/NewsList/TextCardList";
import { useState } from "react";
import useInfinityScrollQuery from "@src/pages/NewsPage/hooks/useInfinityScrollQuery";
import Spinner from "@src/components/Spinner";
import { css } from "@emotion/react";
import { useSearchParams } from "react-router-dom";
import styled from "@emotion/styled";


export default function NewsList() {
  const [isView, setIsView] = useState<boolean>(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const keyType = searchParams.get("keyType");
  const paramValue = searchParams.get("paramValue");
  const mediaType = searchParams.get("mediaType");
  const languages = searchParams.get("languages");
  const timeFilter = searchParams.get("timeFilter");
  const orderBy = searchParams.get("orderBy");
  const exchange:any = searchParams.get("orderBy");

  const { data,ref, isLoading, isSuccess, status,  hasNextPage,    isFetchingNextPage
  } =
  useInfinityScrollQuery({
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
    <div>
      <NewsListFilter
        handleImageCardListView={handleImageCardListView}
        handleTextCardListView={handleTextCardListView}
      />
      <div>
      {status === 'loading' ? (
        <p>Loading...</p>
      ) : status === 'error' ? (
        <span>Error</span>
      ) :(<>        {isView && data && <ImageCardList data={data} />}
      {!isView && data && <TextCardList data={data} />}</>)
    }

      </div>
      <div css={styles.loading}>
  
       <LoadMore ref={ref}>        {isFetchingNextPage
                ?  <Spinner />
                : hasNextPage
                ? 'Load Newer'
                : 'Nothing more to load'}</LoadMore>

      </div>
    </div>
  );
}

const styles = {
  loading: css``,
};

const LoadMore = styled.div``