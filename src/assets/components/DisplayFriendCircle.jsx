import styled from "@emotion/styled";
import Confetti from "./Confetti";
const DisplayFriendCircle = ({
  friends,
  advice,
  viewState,
  nat,
  natOptions,
}) => {
  const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `;

  const StyledPersons = styled.div`
    border: 1px solid #ccc;
    border-radius: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 4rem;
    row-gap: 4rem;
    width: 20rem;
    height: 20rem;
    margin: 2rem;
  `;

  const PictureFrame = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: clip;
    border-radius: 100%;
    height: 125px;
    width: 125px;
  `;
  const You = styled.div`
    height: 125px;
    width: 125px;
    border-radius: 100%;
    background-color: rgba(100, 100, 100, 0.75);
  `;

  const StyledPerson = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    position: relative;
    p {
      font-size: 0.9rem;
      font-weight: bold;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 0.5rem;
      border-radius: 0.25rem;
      position: absolute;
      bottom: -40px;
      display: flex;
      justify-content: center;
    }
  `;

  const FullWidth = styled.div`
    width: 100%;
  `;

  return (
    <>
      {viewState === "results" && (
        <StyledWrapper>
          <Confetti />
          <FullWidth>
            <h1>Meet your new friends in {natOptions[nat]}!</h1>
          </FullWidth>

          <StyledPersons>
            {friends.results.map((friend, index) => (
              <StyledPerson key={index}>
                <PictureFrame>
                  <img src={friend.picture.large} alt="headshot" />
                </PictureFrame>
                <p>
                  {friend.name.first} {friend.name.last} ({friend.dob.age})
                </p>
              </StyledPerson>
            ))}
            <StyledPerson>
              <You></You>
              <p>You!</p>
            </StyledPerson>
          </StyledPersons>

          <FullWidth>
            <p>Circle motto:</p>
            <p>{advice.slip.advice}</p>
          </FullWidth>
        </StyledWrapper>
      )}
    </>
  );
};

export default DisplayFriendCircle;
