#pragma strict

static var score       : int;
var cameraCena    : GameObject;
var contadorAQI   : float;
var ultimoInimigo : GameObject;
var qualInimigo : int;
var contador    : float;
var diminuiPR   : float;
var quantEsp    : float;

class TiposInimigos {

	var pInimigos : GameObject;

}

var inimigos : TiposInimigos[];

function Start () {

}

function Update () {
	contador += Time.deltaTime;
	contadorAQI += Time.deltaTime;
	if(contador > quantEsp){

		score += 1;
		transform.position.y = (Random.Range(-50,50))/10;
		ultimoInimigo = Instantiate(inimigos[Random.Range(0,2)].pInimigos,transform.position,transform.rotation,cameraCena.transform);
		ultimoInimigo.tag = "Inimigos";
		contador = 0;

	}	
	if(contadorAQI >= 1){

		quantEsp -= diminuiPR;
		diminuiPR = quantEsp/100;
		contadorAQI = 0;

	}
}
