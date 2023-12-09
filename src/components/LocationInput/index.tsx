import { GlobalOutlined } from "@ant-design/icons";
import AutoComplete from "react-google-autocomplete";

import * as S from "./styles";

interface LocationInputProps {
  onPlaceSet(location: string): void;
  value: string;
}

const LocationInput = ({ onPlaceSet, value }: LocationInputProps) => {
  return (
    <S.Wrapper>
      <GlobalOutlined style={{ color: "#B9BDCF", padding: "0 8px" }} />
      <AutoComplete
        apiKey={import.meta.env.VITE_GOOGLE_API_KEY}
        onPlaceSelected={(place) => onPlaceSet(place.formatted_address)}
        className="location__input"
        placeholder="City, state, zip code or country"
        defaultValue={value}
      />
    </S.Wrapper>
  );
};

export default LocationInput;
