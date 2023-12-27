import { useState } from "react";
// import "./styles.css";

// Définition du type pour le tableau d'images.
const images: string[] = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
];

export default function App() {
  // Utilisation de useState pour suivre l'image actuelle affichée.
  const [actuele, setactuele] = useState<number>(0);

  // nextSlide : Fonction pour naviguer à la diapositive suivante.
  function nextSlide() {
    // Cette fonction met à jour l'état 'actuele' pour montrer la prochaine image.
    // Elle vérifie si l'image actuelle est la dernière du tableau.
    // Si c'est le cas, elle revient à la première image (indice 0).
    // Sinon, elle avance d'une image (actuele + 1).
    setactuele(actuele === images.length - 1 ? 0 : actuele + 1);
  }

  // prevSlide : Fonction pour revenir à la diapositive précédente.
  function prevSlide() {
    // Cette fonction met à jour l'état 'actuele' pour montrer l'image précédente.
    // Elle vérifie si l'image actuelle est la première du tableau.
    // Si c'est le cas, elle passe à la dernière image du tableau.
    // Sinon, elle recule d'une image (actuele - 1).
    setactuele(actuele === 0 ? images.length - 1 : actuele - 1);
  }

  return (
    <div>
      <h2>Project 2: Carousel</h2>
      <div className="slider">
        <div className="left-arrow" onClick={prevSlide}>
          ⬅
        </div>
        <div className="right-arrow" onClick={nextSlide}>
          ⮕
        </div>
        {images.map(
          (image, index) =>
            actuele === index && (
              <div key={image} className="slide">
                <img src={image} alt="images" />
              </div>
            )
        )}
      </div>
    </div>
  );
}
