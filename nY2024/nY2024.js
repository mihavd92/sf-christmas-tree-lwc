import { LightningElement, track } from 'lwc';
import IMAGES from "@salesforce/resourceUrl/tree";

export default class NY2024 extends LightningElement {

    treeImg = IMAGES + '/tree.png';

    @track baubles = [];

    connectedCallback() {
        const maxX = 6;
        const maxY = 17;
        
        for (let i = 0; i < 100; i++) { // Adjust the number of baubles as needed
            const y = Math.pow(i / 100, 0.5) * maxY * 2 - maxY;
            const x = Math.pow((maxX * i) / 100, 0.5) * 5.5 * Math.random() * (i % 2 === 0 ? 1 : -1);
            const hue = Math.random() * 360;
            const scale = Math.random() * 1.168661 + 0.025;
            
            this.baubles.push({
                key: i,
                styles: `--a: ${x}vmin; --b: ${y}vmin; --c: ${scale}; --hue: ${hue};`
            });
        }
    }

    renderedCallback() {
        this.startAnimations();
    }

    startAnimations() {
        const baubles = this.template.querySelectorAll('p');

        baubles.forEach((bauble, i) => {
            bauble.animate(
                { opacity: [1, 0, 1, 0] },
                {
                    duration: 2000 + Math.random() * 3000,
                    iterations: Infinity,
                    direction: "alternate",
                    delay: Math.random() * -16000,
                    easing: "ease-in-out"
                }
            );
        });
    }

    get treeImgStyle() {
      return `background-image: url(${this.treeImg});`;
  }
}