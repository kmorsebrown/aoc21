//Test Data
diveCommands = [
    { direction: 'forward', unitsMoved: 5 },
    { direction: 'down', unitsMoved: 5 },
    { direction: 'forward', unitsMoved: 8 },
    { direction: 'up', unitsMoved: 3 },
    { direction: 'down', unitsMoved: 8 },
    { direction: 'forward', unitsMoved: 2 }
];

// Part Two

function getPositionMultiplier(commands) {
    let horizPosition = 0;
    let depth = 0;
    let aim = 0;
  
    for (var index = 0; index < commands.length; index++) {
      switch (commands[index].direction) {
          case "forward":
              horizPosition += commands[index].unitsMoved;
              depth += (aim * commands[index].unitsMoved);
              break;
          case "up":
              aim -= commands[index].unitsMoved;
              break;
          case "down":
              aim += commands[index].unitsMoved;
              break;
      }
    }
    return depth * horizPosition;
  }
  
  console.log(getPositionMultiplier(diveCommands));