import styled from "@emotion/styled";
import SelectNat from "./SelectNat";

const StyledStartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledStart = styled.div`
  border: 1px solid #ccc;
  border-radius: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  width: 30rem;
  height: 30rem;
  h1,
  h2 {
    padding: 0;
    margin: 0;
  }
`;

const StyledButton = styled.button`
  color: black;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  background-color: #f0f0f0;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const Start = ({ setNat, viewState, setViewState, natOptions }) => {
  const handleClick = () => {
    setViewState("loading");
  };
  return (
    <>
      {viewState === "start" && (
        <StyledStartWrapper>
          <StyledStart>
            <h1>CIRCLE</h1>
            <h2>Social Integration Service</h2>
            <p>
              <strong>Expand your social horizons.</strong> Simply select a
              country, and we'll instantly connect you with a vibrant new social
              circle. You will be laughing it up with your new circle of friends
              in no time!
            </p>
            <SelectNat
              label="Where are you?"
              setNat={setNat}
              natOptions={natOptions}
            />
            <StyledButton onClick={handleClick}>CONNECT</StyledButton>
          </StyledStart>
        </StyledStartWrapper>
      )}
    </>
  );
};

export default Start;
