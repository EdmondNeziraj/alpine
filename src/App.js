import { styled } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";


const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">Alpine</Heading>
        <Button>test</Button>
        <Input type="Number" placeholder="Number of guests"/>

        <Heading as="h2">Check in</Heading>
        <Button>test</Button>
        <Input type="Number" placeholder="Number of guests"/>

        <Heading as="h3">Form</Heading>
        <Button>test</Button>
        <Input type="Number" placeholder="Number of guests"/>
      </StyledApp>
    </>
  );
}

export default App;
