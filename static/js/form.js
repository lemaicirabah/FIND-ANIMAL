function validerFormulaire() {
    let formulaire = document.forms["formulaireAdoption"];
    let nomAnimal = formulaire["nomAnimal"].value;
    let especeAnimal = formulaire["especeAnimal"].value;
    let raceAnimal = formulaire["raceAnimal"].value;
    let descriptionAnimal = formulaire["descriptionAnimal"].value;
    let emailContact = formulaire["emailContact"].value;
    let adresseContact = formulaire["adresseContact"].value;
    let villeContact = formulaire["villeContact"].value;
    let codePostalContact = formulaire["codePostalContact"].value;
    let validated = true;

    const virgule = new RegExp('\,');
    const email = new RegExp('^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$');
    const codePostal = new RegExp('^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$');

    let paragraphs = document.getElementsByTagName("p");

    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].innerHTML = "";
    }

    if (nomAnimal === "") {
        let errorParagraph = document.getElementById("nomAnimalErreur");
        errorParagraph.innerHTML = "<p> ** Veuillez entrer le nom de l'animal.</p>";
        errorParagraph.style.color = "red";
        validated = false;
    } else if (virgule.test(nomAnimal)) {
        let errorParagraph = document.getElementById("nomAnimalErreur");
        errorParagraph.innerHTML = "<p> ** Le nom de l'animal ne doit pas contenir de virgule.</p>";
        errorParagraph.style.color = "red";
        validated = false;
    } else if (nomAnimal.length < 3 || nomAnimal.length > 20) {
        let errorParagraph = document.getElementById("nomAnimalErreur");
        errorParagraph.innerHTML = "<p> ** Le nom de l'animal doit être entre 3 et 20 caractères.</p>";
        errorParagraph.style.color = "red";
        validated = false;
    }

    if (especeAnimal === "") {
        let errorParagraph = document.getElementById("especeAnimalErreur");
        errorParagraph.innerHTML = "<p> ** Veuillez entrer l'espèce.</p>";
        errorParagraph.style.color = "red";
        validated = false;
    } else if (virgule.test(especeAnimal)) {
        let errorParagraph = document.getElementById("especeAnimalErreur");
        errorParagraph.innerHTML = "<p> ** L'espèce ne doit pas contenir de virgule.</p>";
        errorParagraph.style.color = "red";
        validated = false;
    }

    if (raceAnimal === "") {
        let errorParagraph = document.getElementById("raceAnimalErreur");
        errorParagraph.innerHTML = "<p> ** Veuillez entrer la race.</p>";
        errorParagraph.style.color = "red";
        validated = false;
    } else if (virgule.test(raceAnimal)) {
        let errorParagraph = document.getElementById("raceAnimalErreur");
        errorParagraph.innerHTML = "<p> ** La race ne doit pas contenir de virgule.</p>";
        errorParagraph.style.color = "red";
        validated = false;
    }

    if (descriptionAnimal === "") {
        let errorParagraph = document.getElementById("descriptionAnimalErreur");
        errorParagraph.innerHTML = "<p> ** Veuillez entrer la description.</p>";
        errorParagraph.style.color = "red";
        validated = false;
    } else if (virgule.test(descriptionAnimal)) {
        let errorParagraph = document.getElementById("descriptionAnimalErreur");
        errorParagraph.innerHTML = "<p> ** La description ne doit pas contenir de virgule.</p>";
        errorParagraph.style.color = "red";
        validated = false;
    }

    if (emailContact === "") {
        let errorParagraph = document.getElementById("emailContactErreur");
        errorParagraph.innerHTML = "<p> ** Veuillez entrer le courriel.</p>";
        errorParagraph.style.color = "red";
        validated = false;
    } else if (!(email.test(emailContact))) {
        let errorParagraph = document.getElementById("emailContactErreur");
        errorParagraph.innerHTML = "<p> ** Le courriel doit avoir le format suivant : 'email@email.com'</p>";
        errorParagraph.style.color = "red";
        validated = false;
    }

    if (adresseContact === "") {
        let errorParagraph = document.getElementById("adresseContactErreur");
        errorParagraph.innerHTML = "<p> ** Veuillez entrer l'adresse.</p>";
        errorParagraph.style.color = "red";
        validated = false;
    } else if (virgule.test(adresseContact)) {
        let errorParagraph = document.getElementById("adresseContactErreur");
        errorParagraph.innerHTML = "<p> ** L'adresse ne doit pas contenir de virgule.</p>";
        errorParagraph.style.color = "red";
        validated = false;
    }

    if (villeContact === "") {
        let errorParagraph = document.getElementById("villeContactErreur");
        errorParagraph.innerHTML = "<p> ** Veuillez entrer la ville.</p>";
        errorParagraph.style.color = "red";
        validated = false;
    } else if (virgule.test(villeContact)) {
        let errorParagraph = document.getElementById("villeContactErreur");
        errorParagraph.innerHTML = "<p> ** La ville ne doit pas contenir de virgule.</p>";
        errorParagraph.style.color = "red";
        validated = false;
    }

    if (codePostalContact === "") {
        let errorParagraph = document.getElementById("codePostalContactErreur");
        errorParagraph.innerHTML = "<p> ** Veuillez entrer le code postal.</p>";
        errorParagraph.style.color = "red";
        validated = false;
    } else if (!(codePostalContact.test(codePostalContact))) {
        let errorParagraph = document.getElementById("codePostalContactErreur");
        errorParagraph.innerHTML = "<p> ** Le code postal doit avoir le format suivant : H2C 3G6.</p>";
        errorParagraph.style.color = "red";
        validated = false;
    }

    return validated;
}

function soumettreFormulaire() {
    if (validerFormulaire()) {
        document.forms["formulaireAdoption"].submit();
    }
}
