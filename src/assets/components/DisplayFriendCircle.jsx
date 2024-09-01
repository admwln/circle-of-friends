import styled from "@emotion/styled";
import Confetti from "./Confetti";
import { getRandomDateTime, getYearEstablished } from "./lib/helperFunctions";
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
    justify-content: flex-start;
    align-items: center;
    gap: 4rem;
    h1 {
      margin: 0;
    }
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

  const StyledInfoWrapper = styled.div`
    width: 20rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    gap: 0.5rem;
    h2 {
      margin: 0;
    }
    p {
      margin: 0;
    }
  `;

  const RowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 2rem;
    width: 100%;
    flex-wrap: wrap;
  `;

  const { formattedDate, formattedTime } = getRandomDateTime(10);
  const circleEst = getYearEstablished(friends);

  return (
    <>
      {viewState === "results" && (
        <StyledWrapper>
          <Confetti />
          <div>
            <h1>Meet your new friends in {natOptions[nat]}!</h1>
          </div>

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

          <RowWrapper>
            <StyledInfoWrapper>
              <h2>Get to know your circle</h2>
              <p>
                <strong>MOTTO</strong> <i>{advice.slip.advice}</i>
              </p>
              <p>
                <strong>FRIENDS SINCE</strong> {circleEst}
              </p>
              <p>
                <strong>NEXT MEETUP</strong> {formattedDate} at {formattedTime}
              </p>
            </StyledInfoWrapper>
            <StyledInfoWrapper>
              <h2>Get in touch</h2>
              <p>
                <strong>CIRCLE CONTACT</strong> {friends.results[0].name.first}{" "}
                {friends.results[0].name.last}{" "}
              </p>
              <p>
                <strong>EMAIL</strong> {friends.results[0].email}
              </p>
              <p>
                <strong>PHONE</strong> {friends.results[0].phone}
              </p>
            </StyledInfoWrapper>
          </RowWrapper>
        </StyledWrapper>
      )}
    </>
  );
};

export default DisplayFriendCircle;
