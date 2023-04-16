// Description: Elements components
// @ts-check

// Description: Button component

/**
 * Button component
 * @class
 */

export class ButtonComponent {
  /**
   * Render the button component
   * @method
   * @returns {void}
   * @memberof ButtonComponent
   * @param {HTMLElement} parentElement
   */
  render(parentElement) {
    this.buttonSection = parentElement;
    if (!this.buttonSection) {
      throw new Error("No parent element found");
    }
    this.buttonSection.innerHTML = `
    <div class="container-button">
      <button class="button button-font" type="button">READ MORE</button>
    </div>
    `;
  }
}
