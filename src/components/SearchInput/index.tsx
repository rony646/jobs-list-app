import { Button, Input } from "antd";
import { TeamOutlined } from "@ant-design/icons";

import "./SearchInput.css";

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
    <div className="search__input_wrapper">
      <div className="search__input__input__box">
        <Input
          size="large"
          placeholder="Title, expertise or benefits"
          className="search__input__input__box_input"
          prefix={<TeamOutlined />}
          value={value}
          onChange={(event) => onChangeValue(event.target.value)}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              onSearchValue(value);
            }
          }}
        />

        <Button
          type="primary"
          className="search__input__input__box_button"
          onClick={() => onSearchValue(value)}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchInput;
