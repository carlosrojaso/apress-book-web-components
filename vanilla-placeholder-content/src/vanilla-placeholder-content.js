export class VanillaPlaceholderContent extends HTMLElement {
    constructor() {
        super();
        const placeholder = document.createElement('placeholder');
        placeholder.innerHTML = VanillaPlaceholderContent.template();
        placeholder.style.height = this.getAttribute('height') || '50px';
        placeholder.style.width = this.getAttribute('width') || '50px';

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(document.importNode(placeholder.content, true));
    }

    static template () {
        return `
        <style>
        .placeholder {
            background-color: red;
        }
        </style>
        <div class='placeholder'>Placeholder</div>`;
    }
}
customElements.define('vanilla-placeholder-content', VanillaPlaceholderContent);