window.onload=menu;
window.onload=date;


// Menu  déroulant

function date() {
    var vnavi = document.getElementById("date_affiche");
    var date = new Date();
    var mois = date.getMonth()+1;
    var jour = date.getDate();
    var annee = date.getFullYear();
    var heure = date.getHours();
    var minute = date.getMinutes();
    var seconde = date.getSeconds();
    vnavi.innerHTML = "Nous somme le " + jour + "/" + mois +"/" + annee +"<br/>Et il est " + heure+"h"+minute+"m"+seconde+"s";
}

function menu(element,afficher)
{
    var element_a_derouler = document.getElementById(element);
    var background = document.getElementById(element+'_hover');
    if (!afficher)
    {
        element_a_derouler.style.display='none';
        background.style.backgroundColor='transparent';
    }
    else if (afficher)
    {
        element_a_derouler.style.display='block';
        background.style.backgroundColor='rgba(101, 119, 255, 0.8)';
    }
}


// Modal Contact Footer

function ouvrir_modal() {
    var modal = document.getElementById("modal_contact");
    modal.style.display = "block";
}

function fermer_modal() {
    var modal = document.getElementById("modal_contact");
    modal.style.display = "none";
}


// Form Modal

function submit_modal_form()
{
    alert("Votre commentaire a bien été pris en compte !")
}


// Form Espace Membre Connexion

function reset_form()
{
    document.getElementById("id_hidden").style.display = "none";
    document.getElementById("mdp_hidden").style.display = "none";
    document.getElementById("mail_hidden").style.display = "none";
    document.getElementById("mdp").style.backgroundColor = "white";
    document.getElementById("identifiant").style.backgroundColor = "white";
    document.getElementById("email").style.backgroundColor = "white";
}

function se_connecter()
{
    reset_form();
    var mail = document.getElementById("email");
    var identifiant = document.getElementById("identifiant");
    var mdp = document.getElementById("mdp");
    if(!mdp.value)
    {
        document.getElementById("mdp_hidden").style.display = "block";
        mdp.style.backgroundColor = "#FF5F5B";
    }
    if(!identifiant.value)
    {
        document.getElementById("id_hidden").style.display = "block";
        identifiant.style.backgroundColor = "#FF5F5B";
    }
    if(!mail.value)
    {
        document.getElementById("mail_hidden").style.display = "block";
        mail.style.backgroundColor = "#FF5F5B";
    }
    if(mail.value && identifiant.value && mdp.value)
    {
        alert("Utilisateur non trouvé");
    }
}


// Form Espace membre inscription

function choisir_ville() {
    pays = document.getElementById('pays').value;
    switch (pays) {
        case 'france':
            document.getElementById('ville_residence').selectedIndex = 1;
            break;
        case 'espagne':
            document.getElementById('ville_residence').selectedIndex = 2;
            break;
        case 'royaume-uni':
            document.getElementById('ville_residence').selectedIndex = 3;
            break;
        case 'allemagne':
            document.getElementById('ville_residence').selectedIndex = 4;
            break;
        case 'portugal':
            document.getElementById('ville_residence').selectedIndex = 5;
            break;
        case 'russie':
            document.getElementById('ville_residence').selectedIndex = 6;
            break;
        case 'belgique':
            document.getElementById('ville_residence').selectedIndex = 7;
            break;
        case 'suisse':
            document.getElementById('ville_residence').selectedIndex = 8;
            break;
        case 'suede':
            document.getElementById('ville_residence').selectedIndex = 9;
            break;
        case 'italie':
            document.getElementById('ville_residence').selectedIndex = 10;
            break;
        default:
            break;
    }
}

function verif_form_inscr() {
    var mail = document.getElementById("email");
    var tel = document.getElementById("telephone");
    var identifiant = document.getElementById("pseudo");
    var mdp = document.getElementById("mdp");
    var mdp_conf = document.getElementById("mdp_conf");
    if(!mail.value)
    {
        document.getElementById("mail_hidden").style.display = "block";
        mail.style.backgroundColor = "#FF5F5B";
    }
    if(!identifiant.value)
    {
        document.getElementById("id_hidden").style.display = "block";
        identifiant.style.backgroundColor = "#FF5F5B";
    }
    if(!mdp.value)
    {
        document.getElementById("mdp_hidden").style.display = "block";
        mdp.style.backgroundColor = "#FF5F5B";
    }
    if(!tel.value)
    {
        document.getElementById("tel_hidden").style.display = "block";
        tel.style.backgroundColor = "#FF5F5B";
    }
    if(mdp.value != mdp_conf.value)
    {
        document.getElementById("mdp_conf_hidden").style.display = "block";
        mdp_conf.style.backgroundColor = "#FF5F5B";
    }
    if(mail.value && identifiant.value && mdp.value && tel.value && mdp.value == mdp_conf.value)
    {
        alert("Inscription réussie");
    }

}

function reset_form_inscr()
{

        document.getElementById("id_hidden").style.display = "none";
        document.getElementById("mdp_hidden").style.display = "none";
        document.getElementById("mail_hidden").style.display = "none";
        document.getElementById("mdp_conf_hidden").style.display = "none";
        document.getElementById("tel_hidden").style.display = "none";
        document.getElementById("mdp").style.backgroundColor = "white";
        document.getElementById("pseudo").style.backgroundColor = "white";
        document.getElementById("email").style.backgroundColor = "white";
        document.getElementById("mdp_conf").style.backgroundColor = "white";
        document.getElementById("telephone").style.backgroundColor = "white";

}
// Diaporama Image

var regex_univ = /(universite.html)/;
var regex_tourisme = /(tourisme.html)/;
var regex_gallerie = /(gallerie.html)/;
var univ = document.URL.match(regex_univ);
var tourisme = document.URL.match(regex_tourisme);
var gallerie = document.URL.match(regex_gallerie);
arg = 0;
if(univ)
{
   liste_image = ["bu_bourgogne.jpg", "erasme.jpg", "esirem.jpg", "mirande.jpg", "sciences_humaines.jpg"];
}
else if(tourisme)
{
    liste_image = ["tourisme_a_dijon.jpg","tourisme2.jpg", "rep.jpg", "tourisme3.jpg", "rue1.jpg", "musee.jpg", "musee2.jpg"]
}
else if(gallerie)
{
    liste_image = ["bu_bourgogne.jpg", "bus_diva.jpg", "darcy.jpg", "dijonpanorama.jpeg", "eglise.jpg", "erasme.jpg", "esirem.jpg", "hotel1.jpg", "hotel2.jpg", "mirande.jpg", "mosquee.jpg", "musee.jpg", "musee2.jpg", "piscine.jpg", "plage.jpg", "plage2.jpg", "rep.jpg", "reseau_divia.jpg", "resto1.jpg", "resto2.jpg", "rue1.jpg", "sciences_humaines.jpg", "stade.jpg", "stade1.jpg", "synagogue.jpg", "toison1.jpg", "toison2.jpg", "tourisme1.jpg", "tourisme2.jpg", "tourisme3.jpg", "tourisme_a_dijon.jpg", "ram_divia.jpg", "universite_de_bourgogne.jpg", "velo_divia.jpg", "ie_etudiante.jpg", "vie_etudiante1.jpg", "vie_etudiante2.jpg", "vie_etudiante3.jpg"]
}

function show(image_arg)
{
document.getElementById('modal_image').style.display="block";
document.getElementById('modal_image').innerHTML += "<img alt='Image' src='media/"+liste_image[image_arg]+"'/>";
arg = image_arg;
}

function next()
{
    if(arg==liste_image.length)
    {
        arg=0;
        show(0)
    }


}

function precedent()
{
    if(arg-1<0)
    {
        arg = liste_image.length;
    }
    show(arg-1)

}

function fermer_diapo() {
    document.getElementById('modal_image').style.display="none";
}

//Video
function m_big(){
    document.getElementById("movie").style.width="600px";
    document.getElementById("movie").style.widht="400px";
}

function m_medium(){
    document.getElementById("movie").style.width="400px";
    document.getElementById("movie").style.widht="300px";
}

function m_small(){
    document.getElementById("movie").style.width="200px";
    document.getElementById("movie").style.widht="150px";
}
//
play=false
function jouer() {
    if (play==false)
    {
    document.getElementById('movie').play();
        play = true;
    }
    else
    {
        document.getElementById("movie").pause();
        play = false;
    }
}

