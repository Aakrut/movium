import styled from "styled-components";

export const Wrapper = styled.div`
  height: 80px;
  border-bottom: 1px solid black;
  top: 0;
  position: sticky;
  z-index: 3;
  background: linear-gradient(
    180deg,
    rgba(14, 15, 23, 0.8) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  backdrop-filter: blur(20px);
  
`;

export const SectionWrapper = styled.div`
height:100%;
margin: 0 auto;
max-width: 1400px;
display: flex;
align-items: center;
justify-content: space-around;
`;

export const Logo = styled.div`
  font-family: "Monument", sans-serif;
  font-size: 24px;
`;

export const MobileMenu = styled.div`
display: none;

@media screen and (max-width:768px){
    display: block;
    cursor: pointer;
    
    &  {
        font-size: 24px;
    }

}
`

export const Links = styled.ul`
  display: flex;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LinkItem = styled.li`
  margin-left: 20px;
  list-style-type: none;

  a{
      font-family: 'Poppins',sans-serif;
      font-size: 16px;
  }
`;
