#pragma strict

var tipoInimigo : int;
var negativoOuPositivo : int;
var contador : float;
var contadorAD : float;
var pedra : GameObject;
var aleatorio : Vector3;

function Start () {
	negativoOuPositivo = Random.Range(0,2);
	if(tipoInimigo == 1){
		if(negativoOuPositivo ==  0){

			transform.eulerAngles = new Vector3(transform.eulerAngles.x,transform.eulerAngles.y,45);

		}
		if(negativoOuPositivo ==  1){

			transform.eulerAngles = new Vector3(transform.eulerAngles.x,transform.eulerAngles.y,-45);

		}
	}
	aleatorio = new Vector3(Random.Range(10,50),Random.Range(10,50),Random.Range(10,50));
}

function Update () {
contadorAD += Time.deltaTime;
	if(contadorAD > 5)Destroy(transform.gameObject);
	if(tipoInimigo == 0){

		transform.Translate(-8*Time.deltaTime,0,0);

	}
	if(tipoInimigo == 1){

		contador += Time.deltaTime;
		transform.Translate(-8*Time.deltaTime,0,0);
		if(negativoOuPositivo ==  1){

			transform.Rotate(0,0,180*Time.deltaTime);

		}
		if(negativoOuPositivo ==  0){

			transform.Rotate(0,0,-180*Time.deltaTime);

		}
		if(contador >= 0.5 && negativoOuPositivo == 1){

			negativoOuPositivo = 0;
			contador = 0;

		}
		if(contador >= 0.5 && negativoOuPositivo == 0){

			negativoOuPositivo = 1;
			contador = 0;

		}
	}
	pedra.transform.Rotate(aleatorio.x*Time.deltaTime,aleatorio.y*Time.deltaTime,aleatorio.z*Time.deltaTime);
}
