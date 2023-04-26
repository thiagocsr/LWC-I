import { LightningElement } from 'lwc';

export default class lwcInicio extends LightningElement {
    empresa = "Empresa tal";
    cnpj = "123123123123";
    endereço = "Rua tal";

    produto = "Produto X";
    descrição = "Aquele lá";
    preço = "49.99";

    promoção = "Só hoje";
    oferta1 = "2 por 89.99";
    oferta2 = "3 por 119.99"
    visivel = true;

    trocaVisivel(){
        this.visivel = !this.visivel;
    }
}
