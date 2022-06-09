import ImageCard from "@src/features/NewsList/components/ImageCardList/ImageCard";
import Masonry from "@mui/lab/Masonry";

function ImageCardList({ data }: any) {
  return (
    <>
      <Masonry columns={3} spacing={2}>
        {data?.pages.map(
          (page: any) =>
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
export default ImageCardList;
