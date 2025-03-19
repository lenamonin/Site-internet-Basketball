function affichZero(nombre) {
	return nombre < 10 ? '0' + nombre : nombre;
}
function dateEtHeure() {
	const infos = new Date();
	const datelocale = infos.toLocaleString('fr-FR',{
		weekday : 'long',
		year : 'numeric',
		month : 'long',
		day : 'numeric'});
	document.getElementById('heure_exacte').innerHTML = ' ' + datelocale +" "+ affichZero(infos.getHours()) + ':' + affichZero(infos.getMinutes());
}
window.onload = function() {
	setInterval("dateEtHeure()", 100);
};
