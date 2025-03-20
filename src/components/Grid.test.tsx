import { test, beforeEach, afterEach, expect, vi } from "vitest";
import Grid from "./Grid";
import { render, screen, act, waitFor, fireEvent } from "@testing-library/react";

// Mock the setupGrid utility for a grid of 1-10
beforeEach(() => {
  // Mock timers for testing intervals
  vi.useFakeTimers();
});

afterEach(() => {
  // Clean up timers
  vi.restoreAllMocks();
});

test("clicking on number 2 marks it and its multiples correctly", async () => {
  // Render the Grid component with a size of 5
  render(<Grid gridSize={5} />);

  [1, 2, 3, 4, 5].forEach((num) => {
    expect(screen.getByText(num.toString())).not.toHaveClass("marked");
  });

  const cellWithValueTwo = screen.getByText("2");
  await fireEvent.click(cellWithValueTwo);

  expect(cellWithValueTwo).toHaveClass("marked");

  // All other numbers should still be unmarked
  expect(screen.getByText("1")).not.toHaveClass("marked");
  expect(screen.getByText("3")).not.toHaveClass("marked");
  expect(screen.getByText("4")).not.toHaveClass("marked");
  expect(screen.getByText("5")).not.toHaveClass("marked");

  act(() => {
    vi.advanceTimersByTime(1000);
  });
  screen.debug();

  await waitFor(() => {
    expect(screen.getByText("2")).toHaveClass("marked");
    expect(screen.getByText("4")).toHaveClass("marked");

    expect(screen.getByText("1")).not.toHaveClass("marked");
    expect(screen.getByText("3")).not.toHaveClass("marked");
    expect(screen.getByText("5")).not.toHaveClass("marked");
  });
});
