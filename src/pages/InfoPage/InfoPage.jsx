import { useParams } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
`;

const InfoPage = () => {
  const { idolName } = useParams();
  console.log(idolName);

  return <Wrapper>To be added soon</Wrapper>;
};
export default InfoPage;
