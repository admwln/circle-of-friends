import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";
import { useEffect } from "react";

const rotate = keyframes`
    0% {
        transform: rotate(0deg)
    }
    100% {
        transform: rotate(360deg)
    }
    `;
const Page = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 350px;
  width: 350px;
  animation: ${rotate} 2300ms infinite linear;
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

const Loading = ({ viewState, setViewState }) => {
  useEffect(() => {
    let isMounted = true;

    if (viewState === "loading") {
      const timeoutId = setTimeout(() => {
        if (isMounted) {
          setViewState("results");
        }
      }, 3000);
      return () => {
        isMounted = false;
        clearTimeout(timeoutId);
      };
    }
  }, [viewState, setViewState]);
  return (
    <>
      {viewState === "loading" && (
        <Page>
          <Wrapper>
            <LoadingCircle />
            <SmallCircle />
          </Wrapper>
        </Page>
      )}
    </>
  );
};

export default Loading;
