import TextCard from "@src/features/NewsList/components/TextCardList/TextCard";
import React from "react";

function TextCardList({ data }: any) {
  return (
    <>
      {data?.pages.map(
        (page: any) =>
          page.data.newsList !== undefined && // 다음페이지가 있을 경우만 반복문은돌림
          page.data.newsList.map((article: any, index: number) => (
            <TextCard key={`${article.title}-${index}`} {...article}></TextCard>
          ))
      )}
    </>
  );
}

export default TextCardList;
