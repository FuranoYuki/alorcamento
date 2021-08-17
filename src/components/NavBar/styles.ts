import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  min-height: 100vh;
  width: 80px;

  background-color: var(--dark-blue);

  @media (min-width: 768px) {
    width: 200px;
  }
`;

export const Header = styled.header`
  display: flex;

  text-align: center;

  > a {
    width: 100%;
    padding: 15px;

    font-weight: 600;
    text-decoration: none;

    color: var(--white-color);
  }
`;

export const Image = styled.img`
  width: 50px;
  object-fit: contain;
  object-position: center;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  width: 100%;

  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;

  > div,
  a {
    display: flex;
    justify-content: center;
    gap: 0 10px;

    padding: 15px;

    font-size: 14px;
    font-weight: 600;
    text-align: left;
    text-decoration: none;

    color: var(--gray-color);

    > svg {
      font-size: 22px;
    }

    > span {
      display: none;
    }
  }

  &:hover {
    cursor: pointer;

    background-color: var(--pink-color);

    > a {
      color: white;
    }
  }
`;
