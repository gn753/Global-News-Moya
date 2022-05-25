import styled from "@emotion/styled";
import { useState } from "react";
import { css } from "@emotion/react";
import { orderByParameters } from "@src/features/SearchForm/util/searchPrameterData";
import { useSearchParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { searchParameterAtom } from "@src/features/SearchForm/atoms/searchParameterAtom";
import { SelectChangeEvent } from "@mui/material/Select";
import { Container } from "@mui/material";
import SelectList from "@src/features/common/DropDown/SelectList";

interface Props {
  handleImageCardListView: () => void;
  handleTextCardListView: () => void;
}

export default function NewsListFilter({
  handleImageCardListView,
  handleTextCardListView,
}: Props) {
  const [isActive, setIsActive] = useState<boolean>(true);
  const [params, setParams] = useRecoilState(searchParameterAtom);
  const [searchQuery, setSearchQuery] = useSearchParams({
    keyType: "",
    paramValue: "",
    exchange: "",
  });
  type Query = string | null | undefined;
  const keyType: Query = searchQuery.get("keyType");
  const paramValue: Query = searchQuery.get("paramValue");
  const exchange: Query = searchQuery.get("orderBy");

  const updateOrderBy = async (event: SelectChangeEvent) => {
    setSearchQuery({
      keyType,
      paramValue,
      exchange,
      ...params,
      orderBy: event.target.value,
    }); // 검색 주제

    setParams({ ...params, orderBy: event.target.value }); //Recoil에게 Parmas상태를 전달
  };

  return (
    <section css={styles.wrap} id="snb" role="navigation">
      <Container maxWidth="lg">
        <div css={styles.filterOptions}>
          <SelectList
            naming={"정렬"}
            defaultValue={params.orderBy}
            getValueChange={updateOrderBy}
            dropList={orderByParameters}
          />
          <ShowImageCard role="button" onClick={handleImageCardListView}>
            <HambugerIcon
              onClick={() => setIsActive(true)}
              role="button"
              iconActive={isActive}
            />
          </ShowImageCard>
          <ShowTextCard role="button" onClick={handleTextCardListView}>
            <GridIcon
              onClick={() => setIsActive(false)}
              role="button"
              iconActive={isActive}
            ></GridIcon>
          </ShowTextCard>
        </div>
      </Container>
    </section>
  );
}

const styles = {
  wrap: css`
    margin-bottom: 20px;
  `,
  container: css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
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

type CssProps = {
  iconActive: boolean;
};

const ShowImageCard = styled.div``;
const HambugerIcon = styled.i<CssProps>`
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

const GridIcon = styled.i<CssProps>`
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

const ShowTextCard = styled.div``;
