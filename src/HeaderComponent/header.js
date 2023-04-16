// Description: Header component
// @ts-check

/**
 * Header component
 * @class
 */
class HeaderComponent {
  /**
   * Render the header component
   * @method
   * @returns {void}
   * @memberof HeaderComponent
   */
  render(parentElement) {
    this.headerElement = parentElement;
    if (!this.headerElement) {
      throw new Error("No parent element found");
    }
    this.headerElement.innerHTML = `
        <h1 class="title">
          10 Simple Ways To Manage Your Sugar Cravings, According To A
          Nutritionist
        </h1>
        <p class="subtitle">
          Five minutes of mindfulness and a dash of lemon juice can make all the
          difference
        </p>
      
    `;
  }
}
export default HeaderComponent;
