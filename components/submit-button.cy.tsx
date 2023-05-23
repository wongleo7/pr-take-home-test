import React from "react";
import SubmitButton from "./submit-button";

describe("<SubmitButton />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SubmitButton label={"Test Submit Button"} />);
  });
});
