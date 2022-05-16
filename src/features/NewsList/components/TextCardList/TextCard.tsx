import BookMarkIcon from "@src/features/common/Icon/bookmark/BookMarkIcon";
import ShareIcon from "@src/features/common/Icon/share";
import styled from "@emotion/styled";
import { handleChangeUnixTmeToStandard } from "@src/features/common/util/moment/handleChangeUnixTmeToStandard";
import React, { useState } from "react";
import { css } from "@emotion/react";
import Spinner from "@src/features/Spinner";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslateMutation } from "@src/features/NewsList/hooks/useTranslateMutation";

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
  const { mutate, data, isSuccess, isLoading } = useTranslateMutation();
  const [isActive, setIsActive] = useState<boolean>(false);

  const translateActive = () => {
    setIsActive(!isActive);
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
            {!isActive && title} {isActive && isSuccess && data.translated[0]}
            {isLoading && <Spinner />}
          </h2>
          <div css={styles.footer}>
            <a className="left">
              <img className="brand-logo" src={`${brandImgUrl}`} />
              <span className="brand-name">{brandName}</span>
            </a>
            <div className="right">
              {handleChangeUnixTmeToStandard(publishTime)}
            </div>
          </div>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography css={styles.detail}>
          {!isActive && description}
          {isActive && isSuccess && data.translated[1]}
        </Typography>
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
