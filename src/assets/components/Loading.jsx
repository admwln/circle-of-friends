import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

const rotate = keyframes`
    0% {
        transform: rotate(0deg)
    }
    100% {
        transform: rotate(360deg)
    }
    `;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 350px;
  width: 350px;
  animation: ${rotate} 3s infinite linear;
`;
const LoadingCircle = styled.div`
  position: absolute;
  height: 300px;
  width: 300px;
  border: 1px white solid;
  border-radius: 100%;
`;
const SmallCircle = styled.div`
  position: absolute;
  top: -5px;
  left: 140px;
  height: 60px;
  width: 60px;
  border: 1px white solid;
  border-radius: 100%;
`;

const Loading = ({ viewState }) => {
  return (
    <>
      {viewState === "loading" && (
        <Wrapper>
          <LoadingCircle />
          <SmallCircle />
        </Wrapper>
      )}
    </>
  );
};

export default Loading;
