// Description: Footer component
// @ts-check

/**
 * Footer component
 * @class
 */
class FooterComponent {
    /**
     * Render the footer component
     * @method
     * @returns {void}
     * @memberof FooterComponent
     */
    render(parentElement) {
      this.footerElement = parentElement;
      if (!this.footerElement) {
        throw new Error("No parent element found");
      }
      this.footerElement.innerHTML = `
      <a href="https://nicepage.com/website-templates" class="footer-link-font">Template </a>created with
      <a href="https://nicepage.com/website-builder" class="footer-link-font">Nicepage</a>.
      `;
    }
  }
  export default FooterComponent;