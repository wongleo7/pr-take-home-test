import React from "react";
import Input from "./input";

describe("<Input />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Input
        label={"test label"}
        isError={undefined}
        onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
          console.log(e);
        }}
      />
    );
  });
});
