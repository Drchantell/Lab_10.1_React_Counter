Lab_10.1_React_Counter

This is my Lab 10.1 React Counter project.

About the Project

This beginner-friendly React and TypeScript application focuses on correctly using `useState` and `useEffect`.

The counter starts at 0. The user can increment, decrement, reset the counter, and choose a custom step value.

The application also tracks the count history, automatically saves the current count to localStorage, and supports the ArrowUp and ArrowDown keyboard keys.

React Skills Used

- `useState` for the counter, history, step value, and save message
- Functional state updates when the next value depends on the previous value
- `useEffect` for auto-saving the count
- A dependency array so auto-save runs when the count changes
- A cleanup function that clears the auto-save timer
- `useEffect` for keyboard event listeners
- A cleanup function that removes the keyboard event listener
- Array state for count history
- localStorage

Lab Requirements Completed

- Current count starts at 0
- Increment button
- Decrement button
- History tracking
- Auto-save with localStorage
- Auto-save timer cleanup
- ArrowUp increments the count
- ArrowDown decrements the count
- Keyboard listener cleanup
- Reset button resets the count to 0
- Reset clears the old history and starts again at 0
- Custom step input
- Buttons use the custom step
- Arrow keys use the custom step
- Correct `useState` usage
- Correct `useEffect` usage
- Correct dependency arrays
- Functional state updates

How to Run the Project

1. Open the `Lab_10.1_React_Counter` folder in VS Code.
2. Open the terminal in VS Code.
3. Run:

```bash
npm install
```

4. Then run:

```bash
npm run dev
```

5. Open the local URL shown in the terminal.

Author

Dr. Chantell McDowell  
Per Scholas Student
