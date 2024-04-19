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
      <label htmlFor="selectNat">{label}</label>
      <select id="selectNat" onChange={handleChange}>
        {Object.entries(natOptions).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectNat;
