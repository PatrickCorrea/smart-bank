import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/UI/temas";
import SwitcherTema from "./Components/SwitcherTema";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./GlobalStyle"
import { BtnTema } from "./Components/UI";

function App() {
  const [tema, setTema] = useState(true);

  const toogleTema = () => {
    setTema((tema) => !tema);
  };

  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <GlobalStyle />
      <BtnTema onClick={toogleTema}>
        <SwitcherTema tema={tema} />
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
