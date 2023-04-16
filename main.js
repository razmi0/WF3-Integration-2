//-----------------Main-----------------//

import HeaderComponent from "/src/HeaderComponent/header.js";
import GridComponent from "/src/GridComponent/grid.js";
import { ButtonComponent } from "/src/ElementsComponents/elements.js";
import FooterComponent from "/src/FooterComponent/footer.js";

//-----------------Header-----------------//
const headerElement = document.querySelector("#header");
const header = new HeaderComponent();
header.render(headerElement);

//-----------------Grid-----------------//
const gridParentElement = document.querySelector("#content");
const grid = new GridComponent();
grid.render(gridParentElement);

//-----------------Button-----------------//
const buttonParentElement = document.querySelector("#button");
const button = new ButtonComponent();
button.render(buttonParentElement);

//-----------------Footer-----------------//
const footerElement = document.querySelector("#footer");
const footer = new FooterComponent();
footer.render(footerElement);
