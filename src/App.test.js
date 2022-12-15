import { render, screen } from "@testing-library/react";
import App from "./App";

//pictures
import EarbudsPic from "./assets/earbuds.jpg";
import LaptopPic from "./assets/laptop.jpg";
import ImacPic from "./assets/imac.jpg";
describe("App component", () => {
  it("renders the app component", () => {
    render(<App />); // I think you need to render it first
    const appElement = screen.getByTestId("app-div");
    expect(appElement).toHaveTextContent("ton")
    console.log(appElement)
  });

  beforeAll(() => {
    const cart = [
      { id: 1, name: "Generic Earphone 2000", quantity: 1, price: 200, img: EarbudsPic },
      {
        id: 2,
        name: "Robo Laptop 3000",
        quantity: 1,
        price: 800,
        img: LaptopPic,
      },
      {
        id: 3,
        name: "Generic Imac Computer",
        quantity: 1,
        price: 900,
        img: ImacPic,
      },
    ];
  });

  describe("handleAddCart()", () => {
    it("adds an item based on ID to the cart", () => {
    });
  });
});
