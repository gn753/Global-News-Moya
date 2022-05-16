import { css } from "@emotion/react";
import { handleChangeUnixTmeToStandard } from "@src/features/common/util/moment/handleChangeUnixTmeToStandard";
import { useState } from "react";
import BookMarkIcon from "@src/features/common/Icon/bookmark/BookMarkIcon";
import ShareIcon from "@src/features/common/Icon/share";
import { useTranslateMutation } from "@src/features/NewsList/hooks/useTranslateMutation";

interface Props {
  brandUrl: string;
  description: string;
  imageUrl: string;
  publishTime: string;
  title: string;
  brandImgUrl?: string;
  brandName?: string;
  url?: string;
  article?: any;
  NewsListAnimation?: any;
}

export default function ImageCard({
  description,
  title,
  imageUrl,
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
    <article css={styles.wrap}>
      <div css={styles.inner}>
        <figure css={styles.photo}>
          {imageUrl && <img src={`${imageUrl}`} />}
        </figure>
        <div css={styles.features}>
          <div className="left">
            <button
              css={styles.translate}
              onClick={() => {
                translateActive(), mutate({ title, description });
              }}
            >
              번역
            </button>
          </div>
          <div className="right">
            <BookMarkIcon></BookMarkIcon>
            <ShareIcon />
          </div>
        </div>
        <h2 css={styles.title}>{title} </h2>
        <p>{description}</p>
        <div css={styles.footer}>
          <a className="left">
            <img className="brand-logo" src={`${brandImgUrl}`} />
            <span className="brand-name">{brandName}</span>
          </a>
          <div className="right">
            {handleChangeUnixTmeToStandard(publishTime)}
          </div>
        </div>
      </div>
    </article>
  );
}

const styles = {
  wrap: css`
    display: inline-block;
    box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.05);
    box-sizing: border-box;
    margin-bottom: 22px;
  `,
  inner: css`
    padding-top: 20px;
    padding-bottom: 0;
    padding-left: 20px;
    padding-right: 20px;
  `,
  photo: css`
    max-width: 400px;
    margin: 0;
    img {
      width: 100%;
      margin: 0;
      max-height: 600px;
    }
  `,
  features: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    .right {
      display: flex;
      align-items: center;
    }
  `,
  translate: css`
    border: none;
    outline: none;
    width: 70px;
    height: 40px;
    color: #fff;
    background: #4d4d4d;
    border-radius: 3px;
    cursor: pointer;
  `,
  title: css`
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
    color: var(--color-newstitle);
    margin: 0;
    margin-bottom: 10px;
    a {
      text-decoration: none;
      color: var(--color-newstitle);
    }
  `,
  footer: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 58px;
    .left {
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
