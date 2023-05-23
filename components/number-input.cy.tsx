import React from "react";
import NumberInput from "./number-input";

describe("<NumberInput />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <NumberInput
        name={"test"}
        label={"test label"}
        isError={undefined}
        onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
          console.log(e);
        }}
      />
    );
  });
});
