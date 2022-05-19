import styled from "@emotion/styled";

const StyleGuide = () => {
  return (
    <Style>
      <Container1240>
        <h1 className="style-guide-title">Moya Style Guide</h1>
        <p className="title">ColorPalette</p>
        <ColorPalette>
          <div className="col-2">
            <div className="color-chip">Primary</div>
          </div>
          <div className="col-2">
            <div className="color-chip BlueGreenColor">BlueGreenColor</div>
          </div>
          <div className="col-2">
            <div className="color-chip TextDefault">TextDefault</div>
          </div>
          <div className="col-2">
            <div className="color-chip NewsTitle">NewsTitle</div>
          </div>
          <div className="col-2">
            <div className="color-chip SubTitle">SubTitle</div>
          </div>
          <div className="col-2">
            <div className="color-chip Overline"> Overline</div>
          </div>
          <div className="col-2">
            <div className="color-chip NewsDescription"> NewsDescription</div>
          </div>
        </ColorPalette>
        <Typography>
          <p className="title">TYPOGRAPHY</p>
          <p className="sub-title">한영</p>
          <p className="h1">H1/ Noto sans/ Display Bold/ 40px</p>
          <p className="h2">H2/ Noto sans/ Display SemiBold/ 22px</p>
          <p className="h3">H3/ Noto sans/ Display semiBold/ 20px</p>
          <p className="h4">
            {" "}
            Subtitle 1/ Noto sans/ Display Bold/ 16px/ leading 36
          </p>
          <h5 className="h5">Subtitle 2/ Noto sans/ Display SemiBold/ 16px</h5>
          <p className="body-1">
            Body 1/ Noto sans/ Display Medium/ 16px/ leading 30
          </p>
          <p className="body-2">
            Body 2/ Noto sans/ Display Regular/ 16px/ leading 24
          </p>
          <p className="body-3">Body 2/ Noto sans/ Light/ 16px/ leading 30</p>
          <p className="body-4">Body 4/ Noto sans/ Display Regular/ 14px</p>
          <p className="button-1">Button 1/ Noto sans/ Display Medium/ 20px</p>
          <p className="button-2">Button 2/ Noto sans/ Display Regular/ 16px</p>
        </Typography>
      </Container1240>
    </Style>
  );
};

export default StyleGuide;

const Style = styled.main`
  position: relative;
  min-height: 100vh;
  padding-top: 100px;
  padding-bottom: 200px;
  margin: auto;
  .style-guide-title {
    font-size: 48px;
    font-weight: 700;
    line-height: 54px;
    letter-spacing: -1px;
  }
  .title {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 300;
    font-size: 30px;
    line-height: 30px;
    margin-bottom: 1rem !important;
  }
  section > div {
    position: relative;
  }
  h1 {
    margin-bottom: 20px;
  }
  .ModalDropDown {
    position: relative;
  }
`;
const Container1240 = styled.div`
  max-width: 1240px;
  min-width: 1000px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

const ColorPalette = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 3rem !important;
  gap: 20px;
  & > .col-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
    border: 1px solid black;
  }

  .color-chip {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 30px 0;
    color: #fff;
    font-weight: 700;
    background-color: var(--color-main);
    &.BlueGreenColor {
      background-color: var(--color-bluegreen);
    }
    &.TextDefault {
      background-color: var(--color-text-default);
    }
    &.NewsTitle {
      background-color: var(--color-newstitle);
    }
    &.SubTitle {
      background-color: var(--color-subtitle);
    }
    &.Overline {
      background-color: var(--color-overline);
    }
    &.NewsDescription {
      background-color: var(--color-newsdesciption);
    }
    &.MyKeyword {
      background-color: var(--color-mykeyword);
    }
  }
  .primaryColor {
  }
`;
const Typography = styled.section`
  display: block;
  gap: 10px;
  margin-bottom: 3rem !important;
  p {
    margin: 20 0px;
  }

  .sub-title {
    font-size: 18px;
    margin: 0;
    padding: 0;
  }
  .h1 {
    //styleName: H1;
    font-family: Noto Sans;
    font-size: 40px;
    font-weight: 700;
    line-height: 64px;
    letter-spacing: 0em;
    text-align: left;
    margin: 0;
  }
  .h2 {
    //styleName: H1;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
  }
  .h3 {
    font-family: Noto Sans;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
  }
  .h4 {
    //styleName: subtitle 1;
    font-family: Noto Sans;
    font-size: 16px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: -0.03em;
    text-align: left;
  }
  .h5 {
    //styleName: subtitle 2;
    font-family: Noto Sans;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
  }
  .body-1 {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
  }
  .body-2 {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    letter-spacing: -0.01em;
  }
  .body-3 {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
    /* identical to box height, or 188% */
  }
  .body-4 {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
  }
  .button-1 {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
  }
  .button-2 {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }
`;
const UiComponent = styled.section`
  .UiComponent-title {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 300;
    font-size: 30px;
    line-height: 30px;
    margin-bottom: 1rem !important;
  }
  .UiComponent-sub-title {
    margin: 0;
    font-family: "Noto Sans";
    font-size: 18px;
    line-height: 20px;
    margin-bottom: 1rem !important;
  }
`;
