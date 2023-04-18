// * This js file is incomplete. It will log to the console the elements you click
    // call another function and set stone. You will have to work through the logic
    // of the game as you know it from building it in the terminal. Work through the
    // puzzle slowly, stepping through the flow of logic, and making the game work.
    // Have fun!!
// * First run the program in your browser with live server and double-click on the row you'd like to select an element from.
// * Why are you get a warning in your console? Fix it.
// * Delete these comment lines!

let stone = null

// this function is called when a row is clicked. 
// Open your inspector tool to see what is being captured and can be used.
const selectRow = (row) => {
  const currentRow = row.getAttribute("data-row")
  
  console.log("Yay, we clicked an item", row)
  console.log("Here is the stone's id: ", row.id)
  console.log("Here is the stone's data-size: ", currentRow)
  if(!stone){
    pickUpStone(row.id)
  } else {
    dropStone(row.id)
  }
  checkForWin()
} 

// this function can be called to get the last stone in the stack
// but there might be something wrong with it...
const pickUpStone = (rowID) => {
  const selectedRow = document.getElementById(rowID);
  // console.log("here", selectedRow)
  stone = selectedRow.lastElementChild
  selectedRow.removeChild(stone);
  console.log("*****", stone.id)
}

// You could use this function to drop the stone but you'll need to toggle between pickUpStone & dropStone

// Once you figure that out you'll need to figure out if its a legal move...
// Something like: if(!stone){pickupStone} else{dropStone}


const dropStone = (rowID) => {
  const selectedRow = document.getElementById(rowID)
  let lastStone = selectedRow.lastElementChild
  if(!lastStone){
    selectedRow.appendChild(stone)
  } else if(lastStone.getAttribute("data-size") > stone.getAttribute("data-size")){
    selectedRow.appendChild(stone)
  } else {
    return alert("Illegal move, try again!")
  }
  
  stone = null
  
}

const checkForWin = () => {
  let topRow = document.getElementById('top-row')
  let middleRow = document.getElementById('middle-row')
  if (topRow.childElementCount === 4 || middleRow.childElementCount === 4 ){
    return alert("You Win!")
  }

}



// * Remember you can use your logic from 'main.js' to maintain the rules of the game. But how? Follow the flow of data just like falling dominoes.

