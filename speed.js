function checkSpeed(speed) {  //function to check speed and return demerit points or license suspension
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    let speed = prompt("Enter your speed")
let speed = Number(speed);

    if (speed <= speedLimit) { //if speed is within limit
        return 'Ok';
    } 

    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

        if (demeritPoints > 12) { //if demerit points exceed 12
            return 'License suspended';
        } else {
            return `Points: ${demeritPoints}`;
        }
    }
    function checkSpeedFromInput() { //function to get speed from input field and display result
        const input = document.getElementById('speedInput').value;
        const result = checkSpeed(Number(input));
        document.getElementById('result').testContent = result;
    }
    
checkSpeedFromInput()