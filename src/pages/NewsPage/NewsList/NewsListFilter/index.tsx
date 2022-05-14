import styled from "@emotion/styled";
import { useState } from "react";
import { css } from "@emotion/react";
import { orderByParameters } from "@src/components/SearchForm/util/searchPrameterData";
import { useSearchParams } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { searchParamsState } from '@src/components/SearchForm/DropDown/DropDownList';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Container } from "@mui/material";

export default function NewsListFilter({
  handleImageCardListView,
  handleTextCardListView,
}: any) {
  const [params, setParams] = useRecoilState(searchParamsState);
  const [isActive, setIsActive] = useState<boolean>(true);
  const [searchParams, setSearchParams] = useSearchParams({
    keyType: "",
    paramValue: "",
    exchange: "",
  });

  type Query = any
  const keyType:Query = searchParams.get("keyType");
  const paramValue:Query = searchParams.get("paramValue");
  const exchange:Query = searchParams.get("orderBy");

  const handleOrderByUpdate = async (event: any) => {
    setParams({ ...params, orderBy: event.target.value }); // select 박스 내 텍스트 교체

    setSearchParams({
      keyType,
      paramValue,
      exchange,
      ...params,
      orderBy: event.target.value,
    }); // URL query 교체
  };

  return (
    <section css={styles.wrap} id="snb" role="navigation" >
      <Container maxWidth="lg">
        <div css={styles.filterOptions}>
        <FormControl css={styles.dropbox}>
          <InputLabel id="demo-simple-select-label">정렬</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={params.orderBy}
            label="정렬"
            onChange={handleOrderByUpdate}
          >
            {orderByParameters.map((orderBy) => {
              return (
                <MenuItem
                  value={orderBy.parameter}
                  key={`{index}-${orderBy.name}`}
                >
                  {orderBy.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
          <ImageFormatViewBtn role="button" onClick={handleImageCardListView}>
            <HambugerIcon
              onClick={() => setIsActive(true)}
              role="button"
              iconActive={isActive}
            />
          </ImageFormatViewBtn>
          <TextFormatViewBtn role="button" onClick={handleTextCardListView}>
            <GridIcon
              onClick={() => setIsActive(false)}
              role="button"
              iconActive={isActive}
            ></GridIcon>
          </TextFormatViewBtn>
        </div>
      </Container>
    </section>
  );
}

const styles = {
  wrap:css`
    margin-bottom: 20px;
  `,
  container: css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `,
  dropbox:css`
    width: 160px;
    height: 40px;
    margin-bottom: 10px;
  `,
  filterOptions: css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 99px;
    border-bottom: 1px solid #d9d9d9;
    .result {
      position: absolute;
      top: 50%;
      left: 25px;
      transform: translateY(-50%);
      font-family: "Noto Sans";
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
    }
  `,
  textSizeControl: css`
    width: 40px;
    height: 40px;
    background-image: url("/images/icon-Text-Size.svg");
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
    font-size: 0;
    outline: none;
    border: none;
    background-color: transparent;
  `,
};
// color: ${({ theme }) => theme.subTitle};

type Props = {
  iconActive: boolean;
};

const ImageFormatViewBtn = styled.div``;
const HambugerIcon = styled.i<Props>`
  display: block;
  width: 40px;
  height: 40px;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  background: ${({ iconActive }) =>
      iconActive
        ? "url(/images/icon-Grid-filled.svg)"
        : "url(/images/icon-Grid.svg)"}
    no-repeat 4.5%;
`;

const GridIcon = styled.i<Props>`
  display: block;
  width: 40px;
  height: 40px;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  background: ${({ iconActive }) =>
      iconActive
        ? "url(/images/icon-Grid-list.svg)"
        : "url(/images/icon-hamburger-button.svg)"}
    no-repeat 4.5%;
`;

const TextFormatViewBtn = styled.div``;
