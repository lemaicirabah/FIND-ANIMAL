# Copyright 2023 <Votre nom et code permanent>
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.


from flask import Flask
from flask import render_template,redirect
from flask import g
from flask import request
from database import Database
import random

app = Flask(__name__, static_url_path="", static_folder="static")


def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        g._database = Database()
    return g._database


@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.disconnect()


@app.route('/')
def index():
    database = Database()
    liste_animaux = random.sample(get_db().get_animaux(), k=6)
    return render_template('index.html', liste_animaux=liste_animaux)


@app.route('/resultatRecherche')
def recherche():
    query = request.args.get('query').lower()
    animaux = get_db().get_animaux()
    filterA = []
    for animal in animaux:
        if animal['espece'].lower() in query or animal['nom'].lower() in query:
            filterA.append(animal)
    return render_template('resultatRecherche.html', animaux=filterA)


@app.route('/Animal/<animal_id>')
def animal_id(animal_id):
    database = Database()
    animal_id = database.get_animal(animal_id)
    return render_template('Animal.html', animal=animal_id)


@app.route('/form')
def form():
    return render_template('form.html')

@app.route("/confirmation")
def succes():
    return render_template('confirmation.html')

@app.route("/Erreur")
def fail():
    return render_template('Erreur.html')     

@app.route('/valideForm', methods=["POST"])
def soumettreFormulaire():
    erreur = ""
    nom_animal = request.form["nomAnimal"]
    espece_animal = request.form["especeAnimal"]
    race_animal = request.form["raceAnimal"]
    age_animal = request.form["ageAnimal"]
    description_animal = request.form["descriptionAnimal"]
    email_contact = request.form["emailContact"]
    adresse_contact = request.form["adresseContact"]
    ville_contact = request.form["villeContact"]
    cp_contact = request.form["codePostalContact"]

    if not nom_animal or not nom_animal.strip():
        erreur = True
    elif "," in nom_animal:
        erreur = True
    elif len(nom_animal) < 3 or len(nom_animal) > 20:
        erreur = True

    if not espece_animal or not espece_animal.strip():
        erreur = True
    elif "," in espece_animal:
        erreur = True

    if not race_animal or not race_animal.strip():
        erreur = True
    elif "," in race_animal:
        erreur = True

    if not age_animal or not age_animal.strip():
        erreur = True
    elif int(age_animal) < 0 or int(age_animal) > 20:
        erreur = True

    if not description_animal or not description_animal.strip():
        erreur = True
    elif "," in description_animal:
        erreur = True

    if not email_contact or not email_contact.strip():
        erreur = True
    elif "," in email_contact:
        erreur = True

    if not adresse_contact or not adresse_contact.strip():
        erreur = True
    elif "," in adresse_contact:
        erreur = True

    if not ville_contact or not ville_contact.strip():
        erreur = True
    elif "," in nom_animal:
        erreur = True

    if not cp_contact or not cp_contact.strip():
        erreur = True
    elif "," in cp_contact:
        erreur = True

    if erreur:
        return redirect('/Erreur')
    else:
        database = Database()
        database.add_animal(nom_animal, espece_animal, race_animal, age_animal,
                            description_animal, email_contact, adresse_contact,
                            ville_contact, cp_contact)

    return redirect('/confirmation')

@app.errorhandler(404)
def notFound(e):
    return render_template('notFound.html'), 404

if __name__ == "__main__":
    app.run(debug=True)    