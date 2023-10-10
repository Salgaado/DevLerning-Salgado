import styled from "styled-components";

export const SideBarNav = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  background-color: var(--white);
  height: 100vh;
`;

export const ListItems = styled.ul`
  list-style-type: none;
`;

export const ListItem = styled.li`
  padding: 24px 0;
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--black);
  transition: all 0.2s ease-in;
  
`;

export const Copyright = styled.p`
  padding: 24px 0;
  margin: 0 24px;
  
`;

export const Image = styled.img`
  padding: 24px 0;
  margin: 0 24px;
`;
export const Link = styled.a`
  padding: 24px 0;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--black);
  transition: all 0.2s ease-in;
  margin: 0 20px;
  

  :hover {
    color: var(--yellow);
  }
`;
