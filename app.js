import Game from '/game.js';

const canvas = document.querySelector("#gameScreen");
const context = canvas.getContext("2d");

const GAME_WIDTH = canvas.width = window.innerWidth;
const GAME_HEIGHT = canvas.height = window.innerHeight;


let game = new Game(GAME_WIDTH,GAME_HEIGHT);

function gameLoop() {
  context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  game.update();
  game.draw(context);
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
// To join the sub only Discord: Download the Discord desktop client, make an account, click the cog in the bottom left 
// (user settings), click Connections tab, sync your Twitch to your Discord. The server is a crescent moon emoji with a 2 
// next to it. Wait about an hour for discord to sync ( --> it syncs on the hour <-- ), go back into your connections tab,
//  and click the “join server” button.
