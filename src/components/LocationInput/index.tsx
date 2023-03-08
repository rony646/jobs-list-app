import { GlobalOutlined } from "@ant-design/icons";
import AutoComplete from "react-google-autocomplete";

import "./LocationInput.css";

interface LocationInputProps {
  onPlaceSet(location: string): void;
}

const LocationInput = ({ onPlaceSet }: LocationInputProps) => {
  return (
    <div className="location__input_wrapper">
      <GlobalOutlined style={{ color: "#B9BDCF", padding: "0 8px" }} />
      <AutoComplete
        apiKey={import.meta.env.VITE_GOOGLE_API_KEY}
        onPlaceSelected={(place) => onPlaceSet(place.formatted_address)}
        className="location__input"
        placeholder="City, state, zip code or country"
      />
    </div>
  );
};

export default LocationInput;
