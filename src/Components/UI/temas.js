import { FundoClaro, conteudoClaro, TextoFundoClaro, fundoEscuto, conteudoEscuro, textoFundoEscuro } from "./variaveis"

export const temaClaro = {
    body: FundoClaro,
    inside: conteudoClaro,
    text: TextoFundoClaro,
    filter: "",
};

export const temaEscuro = {
    body: fundoEscuto,
    inside: conteudoEscuro,
    text: textoFundoEscuro,
    filter: "invert(100%)",
}; 