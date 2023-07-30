import React from "react"
import alimentação from "../src/assets/images/alimentacao.svg"
import outros from "../src/assets/images/outros.svg"
import saude from "../src/assets/images/saude.svg"
import utilidades from "../src/assets/images/utilidades.svg"
import transporte from "../src/assets/images/transporte.svg"
import { IconeTema } from "../src/Components/UI"

export default (type) => {
    const Images = {
        Saude: <IconeTema src={saude} alt="Saúde" />,
        Utilidades: <IconeTema src={utilidades} alt="Utilidades" />,
        Transporte: <IconeTema src={transporte} alt="Transporte" />,
        Restaurante: <IconeTema src={alimentação} alt="Restaurante" />,
        default: <IconeTema src={outros} alt="Outros" />
    };

    return Images[type] || Images.default;
};