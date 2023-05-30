import { getinfo } from "../../utils/firebase";

export class Form extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const Namer = this.ownerDocument.createElement('input');
        const Lnamer = this.ownerDocument.createElement('label');
        Lnamer.textContent =  "Name";
        Namer.addEventListener("change", (u: any) => {
            // Create a root reference
            console.log(u.target.value);
        });

        const Ingre = this.ownerDocument.createElement('input');
        const Lingre = this.ownerDocument.createElement('label');
        Lingre.textContent =  "Ingredientes";
        Ingre.addEventListener("change", (u:any) =>{
            console.log(u.target.value)
        });

        const Instr = this.ownerDocument.createElement('input');
        const Linstr = this.ownerDocument.createElement('label');
        Linstr.textContent =  "Instrucciones";
        Instr.addEventListener("change", (u:any) =>{
            console.log(u.target.value)
        });

        const img = this.ownerDocument.createElement('input');
        const Limg = this.ownerDocument.createElement('label');
        Limg.textContent =  "Imagen";
        img.addEventListener("change", (u:any) =>{
            console.log(u.target.value)
        });

        const btn = this.ownerDocument.createElement('button');
        btn.textContent = "Save"
        const Lbtn = this.ownerDocument.createElement('label');
        btn.addEventListener("click",  (u:any) => {
            u.btn.action

        });

        function getinfo(){
        
        };
        
        this.shadowRoot?.appendChild(Namer);
        this.shadowRoot?.appendChild(Lnamer);
        this.shadowRoot?.appendChild(Ingre);
        this.shadowRoot?.appendChild(Lingre);
        this.shadowRoot?.appendChild(Instr);
        this.shadowRoot?.appendChild(Linstr);
        this.shadowRoot?.appendChild(img);
        this.shadowRoot?.appendChild(Limg);
        this.shadowRoot?.appendChild(btn);
        

    }
}

customElements.define("my-form",Form);