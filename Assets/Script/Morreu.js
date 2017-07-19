#pragma strict

static var morreu : boolean;
var scoreAparece : int;
var highScore    : int;
var guiSkinF     : GUISkin;
var oQColide     : String;
var bReiniciar   : Texture;
var bConfiguracao: Texture;
var bAudio       : Texture;
var bSom         : Texture;
var bMudo        : Texture;
var bMenu        : Texture;
var apareceBotoes: boolean;
var fezAnimacao  : boolean;
var contador     : float;

function Start () {

highScore = PlayerPrefs.GetInt("Player High Score");
bAudio = bSom;
	
}

function OnCollisionEnter(collision : Collision){
oQColide = collision.gameObject.tag;
if(collision.gameObject.tag == "Inimigos"){

	morreu = true;

}
}

function OnGUI () {
	GUI.Label(Rect(0,0,Screen.width,Screen.height),"Score: "+scoreAparece,guiSkinF.label);
	if(GUI.Button(Rect(Screen.width-(Screen.width/7),0,Screen.width/7,Screen.height/7),bConfiguracao,guiSkinF.button)){

		apareceBotoes = !fezAnimacao;

	}
	if(apareceBotoes){
	//Botão som
		if(contador >= 1){
			fezAnimacao = true;
			if(GUI.Button(Rect(Screen.width-(Screen.width/7)-(35*contador),0,Screen.width/7,Screen.height/7),bAudio,guiSkinF.button)){

				

			}
		}
		else{

			GUI.Button(Rect((Screen.width-(Screen.width/7))-(35*contador),0,Screen.width/7,Screen.height/7),bAudio,guiSkinF.button);
			contador += Time.fixedDeltaTime;
			fezAnimacao = false;

		}
	//Botão Menu
		if(contador >= 1){
			fezAnimacao = true;
			if(GUI.Button(Rect(Screen.width-(Screen.width/7),35*contador,Screen.width/7,Screen.height/7),bMenu,guiSkinF.button)){

				

			}
		}
		else{

			GUI.Button(Rect(Screen.width-(Screen.width/7),35*contador,Screen.width/7,Screen.height/7),bMenu,guiSkinF.button);
			contador += Time.fixedDeltaTime;
			fezAnimacao = false;

		}
	}
	if(apareceBotoes == false && fezAnimacao == true){
		if(contador <= 0){
			fezAnimacao = false;
		}
		else{

			GUI.Button(Rect((Screen.width-(Screen.width/7))-(35*contador),0,Screen.width/7,Screen.height/7),bAudio,guiSkinF.button);
			contador -= Time.fixedDeltaTime;

		}
		if(contador <= 0){
			fezAnimacao = false;
		}
		else{

			GUI.Button(Rect(Screen.width-(Screen.width/7),35*contador,Screen.width/7,Screen.height/7),bMenu,guiSkinF.button);
			contador -= Time.fixedDeltaTime;

		}
	}
	if(morreu){
		GUI.Box(Rect((Screen.width/2)-((Screen.width/1.6)/2),(Screen.height/2)-((Screen.height/1.6)/2),Screen.width/1.6,Screen.height/1.6),"",guiSkinF.box);
			if(GUI.Button(Rect((Screen.width/2)-((Screen.width/5)/2),(Screen.height/2)-((Screen.height/5)/2),Screen.width/5,Screen.height/5),bReiniciar,guiSkinF.button)){

				morreu = false;
				SpawnInimigos.score = 0;
				ScriptPrincipal.moveEsfera = false;
				Time.timeScale = 1;
				Application.LoadLevel("Cena");

			}
	}
}

function Update () {
	scoreAparece = SpawnInimigos.score;
	if(morreu){

		scoreAparece -= 1;
		if(scoreAparece-highScore >= 0)highScore = scoreAparece;
		PlayerPrefs.SetInt("Player High Score", highScore);
		Time.timeScale = 0;
		ScriptPrincipal.moveEsfera = false;

	}
}