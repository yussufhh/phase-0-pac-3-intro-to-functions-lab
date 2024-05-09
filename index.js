// Function to shout the given string
function shout(string) {
    return string.toUpperCase();
  }
  
  // Function to whisper the given string
  function whisper(string) {
    return string.toLowerCase();
  }
  
  // Function to log the string in all caps
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  
  // Function to log the string in all lowercase
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  
  // Function to handle different responses based on input string
  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
  }
  