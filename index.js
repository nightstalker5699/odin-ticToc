const player = (name,piece,decision)=>{
    let isTurn = decision
    const getName = ()=>{
        return name;
    }
    const getpiece=()=>{
        convertTurn()
        return piece
    }
    const convertTurn =()=> (isTurn ==="yes")?isTurn= "no":isTurn ="yes" 
    const getTurn= ()=> {return isTurn}
    return{getName,getpiece,getTurn}
}
   const gameBoard = (()=>{
    let board = [["","",""],["","",""],["","",""]]
    const endGame = (player)=>{

        document.querySelector(".container").innerHTML += "___"
        document.querySelector(".players").innerHTML += ` ${player} have won!`
    }
    const insertMove = (row,column,playerTurn,playerNext)=>{
        if(!board[row][column]) {
            const piece = playerTurn.getpiece()
            board[row][column] = piece
            playerNext.getpiece()
            document.querySelector(".players").classList.toggle("player2")
            document.querySelector(".players").innerHTML = `${playerNext.getName()} turn : <button onclick = gameBoard.resetGame()>reset game</button>`
            loadgame()
            checkWin(playerTurn.getName(),piece)
            
        }
    }
    const checkWin = (player,piece)=>{
        if (board[0][0] == piece && board[1][1] == piece && piece == board[2][2])
        {
           endGame(player) 
        }
        if (board[0][2] == piece && board[1][1] == piece && piece == board[2][0])
        {
           endGame(player) 
        }
        for(i in board)
        if(board[i][0]== piece &&board[i][1] == piece && piece == board[i][2]){
            endGame(player)
        }
        else if (board[0][i]==piece && board[1][i] == piece&& piece== board[2][i]){
            endGame(player)
        }
    }
    const loadgame = ()=>{
        let counter = 0 
        for(i in board){
            for(j in board){
                document.querySelectorAll(".block")[counter].innerHTML = board[i][j]
                counter++
            }
        }
        document.querySelectorAll(".block").forEach((button)=>{
            button.addEventListener("click",(event)=>{
                const row = event.target.dataset.row
                const column = event.target.dataset.column
                if(player1.getTurn() == "yes" )  
                {   

                    insertMove(row,column,player1,player2)
                }
                else {
                    insertMove(row,column,player2,player1)
                }
                
                
            })
        })
        

    }
    const resetGame = ()=>{
        board = [["","",""],["","",""],["","",""]]
        loadgame()
    }
    return {loadgame,resetGame }
    })();
    const player1 = player("player 1","X","yes")
    const player2 = player("player 2","O","no")

    document.addEventListener("DOMContentLoaded",()=>{
        gameBoard.loadgame(player1,player2)
    })















