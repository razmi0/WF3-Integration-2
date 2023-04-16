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
          alt=""
          src="/assets/pictures/strawberrypot.jpeg"
        />

        <img
          class="img2 img-format"
          alt=""
          src="/assets/pictures/salade_variété.jpeg"
        />
        <div class="subgrid">
          <img
            class="img3 img-format"
            alt=""
            src="/assets/pictures/variété_plats.jpeg"
          />

          <img
            class="img4 img-format offset-position-82"
            alt=""
            src="/assets/pictures/salade_poisson.jpeg"
          />

          <img
            class="img5 img-format offset-position-100"
            alt=""
            src="/assets/pictures/salade_oeuf_plat.jpeg"
          />
        </div>

        <img
          class="img6 img-format"
          alt=""
          src="/assets/pictures/jus_fraise.jpeg"
        />

        <img
          class="img7 img-format offset-position-100"
          alt=""
          src="/assets/pictures/desser_lait_fruit.jpeg"
        />
      </div>
        `;

    }
}
export default GridComponent;