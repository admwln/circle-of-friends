import styled from "@emotion/styled";
const DisplayFriendCircle = ({
  friends,
  advice,
  viewState,
  nat,
  natOptions,
}) => {

  const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
    width: 300px;
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
    background-color: grey;
  `;

  const FullWidth = styled.div`
    width: 100%;
  `;

  return (
    <>
      {viewState === "results" && (
        <StyledWrapper>

          <FullWidth>
            <h1>Meet your new friends in {natOptions[nat]}!</h1>
          </FullWidth>
          {friends.results.map((friend, index) => (
            <div key={index}>
              <PictureFrame>
                <img src={friend.picture.large} alt="headshot" />
              </PictureFrame>
              <p>
                {friend.name.first} {friend.name.last}
              </p>
              <p>{friend.dob.age}</p>
            </div>
          ))}
          <div>
            <You></You>
            <p>You!</p>
          </div>
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
