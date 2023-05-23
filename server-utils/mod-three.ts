"use server";
import { ModThreeStates, ModThreeAlphabet } from "@/types/mod-three";
import {
  finiteAutomation,
  finiteAutomationWithHistory,
} from "./finite-automation";
import { StateHistory } from "@/types/state-history";

// This function is the transition function for a finite automaton that accepts
// binary strings.
// The states are 0, 1, and 2, and the input is 0 or 1.
// The transition function is defined as follows:
// (0, 0) -> 0
// (0, 1) -> 1
// (1, 0) -> 2
// (1, 1) -> 0
// (2, 0) -> 1
// (2, 1) -> 2
//
function modThreeTransition(
  initialState: ModThreeStates,
  input: ModThreeAlphabet
): ModThreeStates {
  try {
    if (initialState === 0 && input === 0) return 0;
    else if (initialState === 0 && input === 1) return 1;
    else if (initialState === 1 && input === 0) return 2;
    else if (initialState === 1 && input === 1) return 0;
    else if (initialState === 2 && input === 0) return 1;
    else if (initialState === 2 && input === 1) return 2;
    else {
      throw new Error("Unexpected input");
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
}

function parseBinaryString(input: string): ModThreeAlphabet[] {
  let result: ModThreeAlphabet[] = [];
  for (let i = 0; i < input.length; i++) {
    const currentAlphabet = input[i];
    if (currentAlphabet === "0") {
      result.push(0);
    } else if (currentAlphabet === "1") {
      result.push(1);
    } else {
      throw new Error("Unexpected input");
    }
  }
  return result;
}

// Mod Three with Finite Automation
export async function modThree(input: string): Promise<ModThreeStates> {
  let binaryInputArray = parseBinaryString(input);
  let currentState: ModThreeStates = 0;
  try {
    return finiteAutomation<ModThreeStates, ModThreeAlphabet>({
      inputAlphabet: binaryInputArray,
      initialState: currentState,
      transitionFunction: modThreeTransition,
    });
  } catch (e) {
    console.log(e);
    throw e;
  }
}

// Mod Three with Finite Automation and History
export async function modThreeWithHistory(input: string): Promise<{
  finalState: ModThreeStates;
  history: StateHistory<ModThreeStates, ModThreeAlphabet>;
}> {
  let binaryInputArray = parseBinaryString(input);
  let currentState: ModThreeStates = 0;
  try {
    return await finiteAutomationWithHistory<ModThreeStates, ModThreeAlphabet>({
      inputAlphabet: binaryInputArray,
      initialState: currentState,
      transitionFunction: modThreeTransition,
    });
  } catch (e) {
    console.log(e);
    throw e;
  }
}
