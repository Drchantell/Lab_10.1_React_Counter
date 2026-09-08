Lab_10.1_React_Counter

This is my Lab 10.1 React Counter project. I built it with React and TypeScript to practice using useState and useEffect.

How the Code Works

The app uses useState to keep track of the count, the step value, and the count history. The count starts at 0, the step starts at 1, and the history starts with 0.

The changeCount function changes the counter and adds the new number to the history.

I used useEffect to save the current count in localStorage when the count changes. I also used a timer so the app does not save too many times at once.

Another useEffect runs when the page first loads. It checks localStorage and restores the saved count and history.

I also used useEffect to make the up and down arrow keys work. The up arrow increases the count and the down arrow decreases the count. The cleanup function removes the keyboard listener when it is no longer needed.

How to Run the Project

Open the project folder in VS Code. Open the terminal and run npm install. After that, run npm run dev. Then open the local link shown in the terminal.

Author: Dr. Chantell McDowell
Per Scholas Student