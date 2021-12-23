import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 50px;
  background: ${(props) => (props.actived ? "#ee6b26" : "#20295f")};
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  img {
    width: 25px;
    height: 25px;
  }
  span {
    color: #fff;
    font-weight: bold;
    align-self: flex-end;
    font-size: 18px;
  }

  &:hover {
    background: #ee6b26;
  }
`;
