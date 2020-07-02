class SimpleFormModalComponent extends HTMLElement {
  constructor() {
      super();

      this.root = this.attachShadow({mode: 'open'});
      this.container = document.createElement('div');
      this.container.innerHTML = SimpleFormModalComponent.getTemplate();
      this.root.appendChild(this.container.cloneNode(true));

      this.titleTextbox = this.root.getElementById("ftitle");
      this.titleTextbox.value = 'value';
  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (name === 'value') {
      this.titleTextbox.value = newValue
    }
  }

  connectedCallback() {
      const myBtn = this.root.getElementById("myBtn");
      const addBtn = this.root.getElementById("addBtn");
      const closeBtn = this.root.getElementById("closeBtn");
      const modal = this.root.getElementById("myModal");
      const form = this.root.getElementById("myForm");

      myBtn.addEventListener('click', function() {
        modal.style.display = "block";
      });
      addBtn.addEventListener('click',  this.handleAdd());
      closeBtn.addEventListener('click',  this.handleCancel());

      form.addEventListener("submit", function(event) {
        event.preventDefault();
      }, true);
  }

  disconnectedCallback () {
    // this.inputNode.removeEventListener('change', this.validate)
  }

  getTitle() {
    console.log(`title`, this.root.getElementById("ftitle"));
    return this.root.getElementById("ftitle").value;
  }

  getDescription() {
    return this.root.getElementById("fdesc").value;
  }

  get title() {
    return this.titleTextbox.value;
  }

  set title(newValue) {
    this.titleTextbox.value = newValue;
  }

  handleAdd() {
    this.dispatchEvent(new CustomEvent('addEvent', {detail: {title: this.titleTextbox.value, description: this.getDescription()}}));
  }

  handleCancel() {
    this.root.getElementById("myModal").style.display = "none";
  }

  static get observedAttributes () {
    return ['value']
  }

  static getTemplate() {
      return `
      ${SimpleFormModalComponent.getStyle()}
      <button id="myBtn">Open Modal</button>
      <div id="myModal" class="modal">
        <div class="modal-content">
          <form id="myForm">
            <label for="ftitle">Title:</label><br>
            <input type="text" id="ftitle" name="ftitle"><br>
            <label for="fdesc">Description:</label><br>
            <textarea id="fdesc" name="fdesc" rows="4" cols="50"></textarea><br/>
            <button id="addBtn">Add</button><button id="closeBtn">Close</button>
          </form>
        </div>

      </div>`;
  }

  static getStyle() {
      return `
      <style>
        .modal {
          display: none;
          position: fixed;
          z-index: 1;
          padding-top: 100px;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgb(0,0,0);
          background-color: rgba(0,0,0,0.4);
        }
        .modal-content {
          background-color: #fefefe;
          margin: auto;
          padding: 20px;
          border: 1px solid #888;
          width: 50%;
        }
        .close {
          color: #aaaaaa;
          float: right;
          font-size: 28px;
          font-weight: bold;
        }

        .close:hover,
        .close:focus {
          color: #000;
          text-decoration: none;
          cursor: pointer;
        }
      </style>`;
  }
}
customElements.define('simple-form-modal-component', SimpleFormModalComponent);
