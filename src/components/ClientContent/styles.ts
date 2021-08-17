import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;

  padding: 60px 20px;

  background-color: var(--white-color);
`;

export const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px 0;

  margin-bottom: 10px;
`;

export const ViewPages = styled.div`
  display: flex;
  gap: 0 10px;

  > span {
    font-size: 14px;
  }
`;

export const Pages = styled.select``;

export const Search = styled.div`
  display: flex;
  gap: 0 10px;

  > label {
    display: flex;
    align-items: center;
    gap: 0 5px;

    font-size: 14px;
  }

  > input {
    width: 200px;
    padding: 5px 10px;
    font-size: 14px;

    border: 1px solid var(--input-border);

    &:focus {
      outline: none;
      border: 1px solid black;
    }
  }
`;

export const SearchIcon = styled(FontAwesomeIcon)``;

export const PagesInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px 0;

  margin-top: 10px;

  > span {
    font-size: 14px;
  }
`;

export const PagesController = styled.div`
  display: flex;
  align-items: center;
`;

export const Controller = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid var(--input-border);
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
`;
