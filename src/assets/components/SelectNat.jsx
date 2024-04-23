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

const SelectNat = ({ setNat, label, natOptions }) => {
  const handleChange = (event) => {
    setNat(event.target.value);
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
