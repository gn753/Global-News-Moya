import React from "react";
import ImageCard from "@src/components/NewsCard/ImageCard";
import Masonry from "@mui/lab/Masonry";

function ImageCardList({ data }: any) {
  return (
    <>
      <Masonry columns={3} spacing={2}>
        {data.pages &&
          data.pages.map(
            (page: any, index: number) =>
              page.data.newsList !== undefined && // 다음페이지가 있을 경우만 반복문은돌림
              page.data.newsList.map((article: any, index: number) => (
                <ImageCard
                  key={`${article.title}-${index}`}
                  {...article}
                ></ImageCard>
              ))
          )}
      </Masonry>
    </>
  );
}
export default React.memo(ImageCardList);
