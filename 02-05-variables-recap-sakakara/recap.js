//cet algorythme va additionner deux nombres

integer nombre1
integer nombre2

input("choisissez deux nombre à additionner" ,$nombre1 , $nombre2)
output("le resultat est" , $nombre1 + $nombre2)


//cet algorythme va diviser deux nombres

integer nombrediv1
integer nombrediv2

input ("choissisez deux nombres à diviser" , $nombrediv1 , $nombrediv2)
output ("Le resultat est" , $nombrediv1 / nombrediv2)

//cet algorythme va afficher le modulo de deux nombres

integer nombremodu1
integer nombremodu2

input ("Choissisez deux nombre pour afficher le reste", $nombremodu1 , $nombremodu2)
output ("le resultat du reste est de" , $nombremodu1%$nombremodu2)

//cet algorythme va concaténer une phrase

string nomEtPrenom = "de Sadeleer Jason"
integer age = 28
string pays = "Belgique"

Output ("Je m'appelle ", $nomEtPrenom , "j'ai", $age, "et je vis en", $pays)

//cet algorythm va afficher un prix sans les tax

float prix
float tax = 0.21

input ("quel est le prix?", $prix)
output ("le prix avec la taxe est de ", ($prix * $tax)(+ $prix))

//cet algorythm va calculer la surface d'un cercle

float rayon
float pi = 3.14

input ("quel est le rayon de votre cercle ", $rayon)
output ("La surface de votre cercle est de", $rayon^2 * $pi)

// cet algorythm va convertir le temps en seconde


inter heure = 15
integer minute = 20
integer seconde = 30
integer secondeTotal = ($heure * 3600) + (minute * 60) + seconde

input ("il s'est écoulé ", $secondeTotal , "et il s'est écoulé ", $secondetotal , "seconde depuis minuit")