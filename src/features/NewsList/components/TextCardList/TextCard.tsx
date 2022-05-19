import BookMarkIcon from "@src/features/common/Icon/bookmark/BookMarkIcon";
import ShareIcon from "@src/features/common/Icon/share";
import styled from "@emotion/styled";
import { changeUnixTmeToStandard } from "@src/features/common/util/moment/changeUnixTmeToStandard";
import React, { useState } from "react";
import { css } from "@emotion/react";
import Spinner from "@src/features/common/Spinner";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useFetchTranslate } from "@src/features/NewsList/hooks/useFetchTranslate";

interface Props {
  brandUrl: string;
  description: string;
  publishTime: string;
  title: string;
  brandImgUrl?: string;
  brandName?: string;
  url?: string;
  article?: any;
  NewsListAnimation?: any;
}

function TextCard({
  description,
  title,
  publishTime,
  brandUrl,
  brandName,
  brandImgUrl,
}: Props) {
  const { mutate, data, isSuccess, isLoading } = useFetchTranslate();
  const [isActive, setIsActive] = useState<boolean>(false);

  const translateActive = () => {
    setIsActive(!isActive);
  };

  const newsText = (text: string, index: number) => {
    const defaultText = !isActive && text;
    const translateText = isActive && isSuccess && data.translated[index];
    if (defaultText) return text;
    else if (translateText) return data.translated[index];
  };

  return (
    <Accordion css={styles.accordion}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>
          <Feature>
            <div className="left">
              <TransLateButton
                onClick={() => {
                  translateActive(), mutate({ title, description });
                }}
              >
                번역
              </TransLateButton>
            </div>
            <div className="right">
              <BookMarkIcon></BookMarkIcon>
              <ShareIcon />
            </div>
          </Feature>
          <h2 css={styles.title}>
            {newsText(title, 0)}
            {isLoading && <Spinner />}
          </h2>
          <div css={styles.footer}>
            <a className="left">
              <img className="brand-logo" src={`${brandImgUrl}`} />
              <span className="brand-name">{brandName}</span>
            </a>
            <div className="right">{changeUnixTmeToStandard(publishTime)}</div>
          </div>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {isLoading && <Spinner />}
        <Typography css={styles.detail}>{newsText(description, 1)}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
export default React.memo(TextCard);
const styles = {
  accordion: css`
    .MuiTypography-root {
      width: 100%;
    }
    margin-bottom: 20px;
  `,
  title: css`
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
    color: var(--color-newstitle);
    margin: 0;
  `,
  detail: css`
    color: var(--color-newsdesciption);
  `,
  footer: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 58px;
    .left {
      position: relative;
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #000;
    }
    .brand-logo {
      display: block;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    .brand-name {
      display: block;
      margin-left: 10px;
    }
  `,
};

const TransLateButton = styled.button`
  border: none;
  outline: none;
  width: 70px;
  height: 40px;
  color: #fff;
  background: #4d4d4d;
  border-radius: 3px;
  cursor: pointer;
`;
const Feature = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;

  .right {
    display: flex;
    align-items: center;
  }
`;

interface Open {
  isOpen: boolean;
}
