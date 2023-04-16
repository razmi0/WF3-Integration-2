// Description: Grid component
// @ts-check

/**
 * Grid component
 * @class
 */
class GridComponent {

    /**
     * Render the grid component
     * @method
     * @returns {void}
     * @memberof GridComponent
     * @param {HTMLElement} parentElement
    **/

    render(parentElement){
        this.sectionElement = parentElement;
        if (!parentElement) {
            throw new Error("No parent element found");
        }
        parentElement.innerHTML = `
        <div class="container-grid">
        <img
          class="img1 img-format"
          alt="strawberrypot"
          src="/assets/pictures/webp/strawberrypot.webp.webp"
        />

        <img
          class="img2 img-format"
          alt="salade_variété"
          src="/assets/pictures/webp/salade_variete.webp.webp"
        />
        <div class="subgrid">
          <img
            class="img3 img-format"
            alt="variété_plats"
            loading="lazy"
            src="/assets/pictures/webp/variete_plats.webp.webp"
          />

          <img
            class="img4 img-format offset-position-82"
            alt="salade_poisson"
            loading="lazy"
            src="/assets/pictures/webp/salade_poisson.webp.webp"
          />

          <img
            class="img5 img-format offset-position-100"
            alt="salade_oeuf_plat"
            loading="lazy"
            src="/assets/pictures/webp/salade_oeuf_plat.webp.webp"
          />
        </div>

        <img
          class="img6 img-format"
          alt="jus_fraise"
          loading="lazy"
          src="/assets/pictures/webp/jus_fraise.webp.webp"
        />

        <img
          class="img7 img-format offset-position-100"
          alt="desser_lait_fruit"
          loading="lazy"
          src="/assets/pictures/webp/desser_lait_fruit.webp.webp"
        />
      </div>
        `;

    }
}
export default GridComponent;