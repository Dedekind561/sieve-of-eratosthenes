import { fireEvent, screen, render, act } from "@testing-library/react";
import { test, expect, beforeEach, afterEach, vi } from "vitest";
import Grid from "./Grid";

beforeEach(() => {
  // tell vitest we use mocked time
  vi.useFakeTimers();
});

afterEach(() => {
  // restoring date after each test run
  vi.useRealTimers();
});

test("can eliminate multiples of 2 for grid size = 6", () => {
  render(<Grid />);

  const button2 = screen.getByText("2");

  fireEvent.click(button2); // <--- trigger an interval to run

  expect(button2).toHaveClass("prime");

  act(() => {
    vi.advanceTimersByTime(1000);
  }); // need to run state updates for our Grid after time has been advanced by 1000ms

  expect(screen.getByText("4")).toHaveClass("marked");

  act(() => {
    vi.advanceTimersByTime(1000);
  }); // need to run state updates for our Grid after time has been advanced by 1000ms

  expect(screen.getByText("6")).toHaveClass("marked");
});
