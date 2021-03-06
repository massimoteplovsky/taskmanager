import Abstract from "./abstract";

const createBoardTemplate = () => {
  return `<section class="board container"></section>`;
};

export default class Board extends Abstract {

  getTemplate() {
    return createBoardTemplate();
  }

}
