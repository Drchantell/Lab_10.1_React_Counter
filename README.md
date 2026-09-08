Lab_10.1_React_Counter

This is my Lab 10.1 React Counter project built with React and TypeScript to practice managing state with `useState` and handling side effects with `useEffect`.

How the Code Works

1. State Management (`useState`)
- `count`: Tracks the current counter value (starts at `0`).
- `step`: Tracks the step amount for increments and decrements (starts at `1`).
- `history`: Keeps an array of all previous count values (starts as `[0]`).

2. Updating State (`changeCount`)
A helper function `changeCount` updates both `count` and appends the new value to `history` using the spread operator (`[...prev, nextCount]`).

3. Auto-Saving with `useEffect`
Automatically saves the current count to `localStorage` when `count` changes. Uses a 500ms `setTimeout` and a cleanup function (`clearTimeout`) to debounce rapid saves and avoid race conditions.

4. Loading Saved State on Mount
An `useEffect` hook with an empty dependency array (`[]`) runs once on page load to restore the count and history from `localStorage`.

5. Keyboard Controls & Cleanup
An `useEffect` hook attaches a `keydown` listener to `document` for `ArrowUp` and `ArrowDown` controls, with a cleanup function (`document.removeEventListener`) to prevent memory leaks and duplicate listeners.

How to Run the Project

1. Open the project folder in VS Code terminal.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the local development server.
4. Open the local URL shown in the terminal.



Author: Dr. Chantell McDowell
Per Scholas Student