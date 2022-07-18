import React, { useRef } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { CloseSquare } from "iconsax-react";

const VideoModal = ({ toggleModal, videoTrailer }) => {
  console.log(videoTrailer);

  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      toggleModal();
    }
  };

  if (!videoTrailer?.results) {
    return <Wrapper>No Video Trailer</Wrapper>;
  }

  return (
    <Wrapper onClick={closeModal} ref={modalRef}>
      <CloseSquare
        size="32"
        color="#d9e3f0"
        className="close-button"
        onClick={toggleModal}
      />

      {videoTrailer.results?.slice(0, 1)?.map((data) => (
        <ReactPlayer
          key={data.id}
          url={`https://www.youtube.com/watch?v=${data.key}`}
          controls={true}
          playIcon
          width="80%"
          height="60%"
        />
      ))}
    </Wrapper>
  );
};

export default VideoModal;

const Wrapper = styled.div`
  width: auto;
  height: auto;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(120px);
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.35s ease-in-out;

  .close-button {
    position: fixed;
    top: 10%;
    right: 10%;
    cursor: pointer;
    z-index: 503;
  }
`;
