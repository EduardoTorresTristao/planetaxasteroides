#pragma strict

var pisca       : GameObject;
var abroca      : GameObject;
var piscaG      : GameObject;
var abrocaG     : GameObject;
var quandoPisca : int;
var piscadaDupla: int;
var contadorb    : float;
var piscando    : boolean;
var aleatorio   : boolean;


function Start () {
	aleatorio = true;
}

function Update () {
	if(aleatorio){

		quandoPisca = Random.Range(3,7);
		aleatorio = false;

	}
	contadorb += Time.deltaTime;
	if(contadorb >= quandoPisca || piscadaDupla == 2){

		contadorb = 0;
		piscando = true;
		piscaG = Instantiate(pisca, transform.position,transform.rotation,transform);
		piscaG.transform.localPosition = pisca.transform.position;
		if(piscadaDupla < 2){

			piscadaDupla = Random.Range(0,2);

		}
		else{

			piscadaDupla = -1;

		}
	}
	if(contadorb >= 0.2 && piscando){

		contadorb = 0;
		piscadaDupla += 1;
		Destroy(piscaG);
		if(piscadaDupla != 2){

			aleatorio = true;
			piscando = false;

		}

	}
}