function getComputerChoice() {   
    min = Math.ceil(0);
  max = Math.floor(3);
  const CHOICE = Math.floor(Math.random() * (max - min) + min);
  switch(CHOICE) {
    case 0:
        return "rock";
    case 1:
        return "paper";
    case 2:
        return "scissor"
  }
}