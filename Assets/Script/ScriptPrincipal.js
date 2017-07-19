#pragma strict

var deOndeSai : Ray;
var raio      : RaycastHit;
var oQColidiu : Collider;
var posicaoY  : float;
var posicaoX  : float;
static var moveEsfera: boolean;
var esfera    : GameObject;
var numeroDeToques : int;
var morreu         : boolean;
var tantoQGira : float;

function Start () {

}

function Update () {
tantoQGira += Time.deltaTime;
numeroDeToques = Input.touchCount;
	if(numeroDeToques == 1){
		deOndeSai = Camera.main.ScreenPointToRay(Input.GetTouch(0).position);
		if(Physics.Raycast(deOndeSai, raio,Mathf.Infinity)){
			if(raio.transform.gameObject == esfera){

				raio.transform.gameObject.layer = 2;
				moveEsfera = true;

			}
			if(raio.transform.gameObject.tag == "Chao" && moveEsfera){

				esfera.transform.position = new Vector3(raio.point.x,raio.point.y,raio.point.z);

			}
		}
	}
	/*if(moveEsfera && numeroDeToques != 1){

		Morreu.morreu = true;

	}
	if(moveEsfera == false){

		Time.timeScale = 0;

	}
	else{

		if(morreu == false)Time.timeScale = 1;

	}*/
	transform.Rotate(0,(tantoQGira/10)*Time.deltaTime,0);
}