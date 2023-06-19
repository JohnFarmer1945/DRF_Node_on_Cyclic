class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
             <p>HEADER DUMMY<p>
          `
    }
  }
  
  
  
  customElements.define('main-header', Header);

