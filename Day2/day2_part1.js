//Test Data
diveCommands = [
    { direction: 'forward', unitsMoved: 5 },
    { direction: 'down', unitsMoved: 5 },
    { direction: 'forward', unitsMoved: 8 },
    { direction: 'up', unitsMoved: 3 },
    { direction: 'down', unitsMoved: 8 },
    { direction: 'forward', unitsMoved: 2 }
];

// Part One
function getPositionMultiplier(commands) {

    let positionHorizontal = 0;
    let positionDepth = 0;
  
    for (var index = 0; index < commands.length; index++) {
      switch (commands[index].direction) {
          case "forward":
              positionHorizontal += commands[index].unitsMoved;
              break;
          case "up":
              positionDepth -= commands[index].unitsMoved;
              break;
          case "down":
              positionDepth += commands[index].unitsMoved;
              break;
      }
    }
    return positionDepth * positionHorizontal;
  }
  
  console.log(getPositionMultiplier(diveCommands));