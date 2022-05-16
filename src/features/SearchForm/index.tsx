import styled from "@emotion/styled";
import { useMemo, useState } from "react";
import { useGetMasterApiQuery } from "@src/features/SearchForm/hooks/useGetMasterApiQuery";
import KeywordList from "@src/features/SearchForm/components/KeywordList";
import Searchbar from "@src/features/SearchForm/components/Searchbar";
import Container from "@material-ui/core/Container";

export default function SearchForm() {
  const { data } = useGetMasterApiQuery();
  const [keywordOpen, setKeywordOpen] = useState<boolean>(false);
  const handleKeywordOpen = (): void => {
    setKeywordOpen(!keywordOpen);
  };

  const keywordList = useMemo(() => {
    return data;
  }, [data]);

  return (
    <Section>
      <Container maxWidth="lg">
        <Searchbar handleKeywordOpen={handleKeywordOpen} />
        {keywordOpen && keywordList && <KeywordList data={keywordList} />}
      </Container>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
`;
