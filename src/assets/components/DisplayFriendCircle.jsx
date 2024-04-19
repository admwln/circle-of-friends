import styled from "@emotion/styled";
const DisplayFriendCircle = ({ friends, loading }) => {
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

  return (
    <>
      <StyledWrapper>
        {friends.map((friend, index) => (
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
      </StyledWrapper>
    </>
  );
};

export default DisplayFriendCircle;
