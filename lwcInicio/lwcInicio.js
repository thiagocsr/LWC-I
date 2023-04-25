import { LightningElement } from 'lwc';

export default class lwcInicio extends LightningElement {
    Empresa = "Empresa tal";
    CNPJ = "123123123123";
    Endereço = "Rua tal";

    Produto = "Produto X";
    Descrição = "Aquele lá";
    Preço = "49.99";

    Promoção = "Só hoje";
    oferta1 = "2 por 89.99";
    oferta2 = "3 por 119.99"
    visivel = true;

    trocaVisivel(){
        this.visivel = !this.visivel;
    }
}