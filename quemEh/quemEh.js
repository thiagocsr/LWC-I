import { LightningElement, wire } from 'lwc';
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");

export default class QuemEh extends LightningElement {
    
    linkPoke = "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/5dd1da62-7fad-4065-ac16-928d743a2176/7af3b478-4cfa-4fce-8c24-af07c24c38c5.jpg";
    richtext = "";

    sound = audio;
    
    revelar(){
        this.linkPoke = "https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/5dd1da62-7fad-4065-ac16-928d743a2176/98a48255-bedb-46d7-8f6e-a54229d3c75d.jpg";
        this.richtext= "É o Flareon";
        this.sound.play();
    }   
}