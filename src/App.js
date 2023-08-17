import { styled } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

function App() {
  return (
    <div>
      <GlobalStyles />
      <H1>Alpine</H1>
    </div>
  );
}

export default App;
