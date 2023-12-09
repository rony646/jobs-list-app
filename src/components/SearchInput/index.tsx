import { TeamOutlined } from "@ant-design/icons";

import * as S from "./styles";

interface SearchInputProps {
  value: string;
  onChangeValue: (value: string) => void;
  onSearchValue: (value: string) => void;
}

const SearchInput = ({
  value,
  onChangeValue,
  onSearchValue,
}: SearchInputProps) => {
  return (
    <S.Wrapper>
      <S.InputBoxContainer>
        <S.SearchInput
          size="large"
          placeholder="Title, expertise or benefits"
          prefix={<TeamOutlined />}
          value={value}
          onChange={(event) => onChangeValue(event.target.value)}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              onSearchValue(value);
            }
          }}
        />

        <S.SearchButton type="primary" onClick={() => onSearchValue(value)}>
          Search
        </S.SearchButton>
      </S.InputBoxContainer>
    </S.Wrapper>
  );
};

export default SearchInput;
