import { useState } from "react";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const App = () => {
  // State to keep track of the output string
  const [outputString, setOutputString] = useState("");

  // Function to handle tile click
  const handleTileClick = (letter) => {
    const updatedString = outputString + letter;
    const finalString = replaceConsecutiveLetters(updatedString);
    setOutputString(finalString);
  };

  
  const replaceConsecutiveLetters = (str) => {
    // Regex to find 3 or more consecutive letters
    return str.replace(/([A-Z])\1{2,}/g, (match) => "_".repeat(match.length));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold my-8 capitalize">alphabet tile interaction</h1>

      {/* Grid container for the tiles */}
      <div className="grid grid-cols-6 gap-4 mb-8">
        {alphabet.map((letter) => (
          <div
            key={letter}
             className="flex items-center justify-center w-10 h-10 sm:h-16 sm:w-16 bg-blue-500 text-white text-base sm:text-xl font-semibold cursor-pointer rounded shadow-lg hover:bg-blue-400"
            onClick={() => handleTileClick(letter)}
          >
            {letter}
          </div>
        ))}
      </div>

      {/* Display the output string */}
      <div className="p-4 bg-white rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Output String:</h3>
        <p id="outputString" className="text-2xl font-bold text-gray-800">
          {outputString}
        </p>
      </div>
    </div>
  );
};

export default App;
