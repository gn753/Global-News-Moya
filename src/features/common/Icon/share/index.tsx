import styled from "@emotion/styled";
const Share = () => {
  return <ShareIcon role="button" />;
};

export default Share;

const ShareIcon = styled.i`
  display: block;
  width: 40px;
  height: 40px;
  background-image: url("/images/icon-Share-outline.svg");
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;
