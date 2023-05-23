import React from "react";
import ModThreeResult from "./mod-three-result";

describe("<ModThreeResult />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <ModThreeResult
        result={{
          remainder: 0,
          binaryNumber: "010",
          history: [
            {
              input: 0,
              state: 0,
            },
            {
              input: 1,
              state: 1,
            },
            {
              input: 0,
              state: 1,
            },
          ],
        }}
      />
    );
  });
});
