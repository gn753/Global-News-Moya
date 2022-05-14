import styled from "@emotion/styled";
import BookMarkIcon from "@src/components/common/Icon/bookmark/BookMarkIcon";
import ShareIcon from "@src/components/common/Icon/share";
export function CardBodyTop({ children }: any) {
  return (
    <>
      <div>
        <div className="left">
          <TransLateButton>번역</TransLateButton>
        </div>
        <div className="right">
          <BookMarkIcon></BookMarkIcon>
          <ShareIcon />
        </div>
      </div>
    </>
  );
}

const TransLateButton = styled.button`

`;
const FlexInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;

  .right {
    display: flex;
    align-items: center;
  }
`;
