import styled from "@emotion/styled";

const StyledSelect = styled.select`
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  padding: 0.5rem;
  width: 75%;
  font-size: 1.5rem;
`;

const StyledLabel = styled.label`
  font-size: 1.5rem;
  font-weight: bold;
`;

const SelectNat = ({ setNat, label }) => {
  const natOptions = {
    AU: "Australia",
    BR: "Brazil",
    CA: "Canada",
    CH: "Switzerland",
    DE: "Germany",
    DK: "Denmark",
    ES: "Spain",
    FI: "Finland",
    FR: "France",
    GB: "Great Britain",
    IE: "Ireland",
    IN: "India",
    IR: "Iran",
    MX: "Mexico",
    NL: "Netherlands",
    NO: "Norway",
    NZ: "New Zealand",
    RS: "Serbia",
    TR: "Turkey",
    UA: "Ukraine",
    US: "United States",
  };

  const handleChange = (event) => {
    setNat(event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
      <StyledLabel htmlFor="selectNat">{label}</StyledLabel>
      <StyledSelect id="selectNat" onChange={handleChange}>
        {Object.entries(natOptions).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </StyledSelect>
    </>
  );
};

export default SelectNat;
