import styled from "styled-components";

const Stat = styled.div`
  margin: 5px;
  padding: 5px;
  background-color: white;
`;

export const ModalStatChild = ({ date }) => {
  return (
    <Stat>
      Дата: {date.date} Просмотры: {date.views}
    </Stat>
  );
};
