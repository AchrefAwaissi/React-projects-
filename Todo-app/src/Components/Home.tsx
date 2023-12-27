import React, { ChangeEvent, useState } from 'react';

const Home = () => {
  const [todo, setTache] = useState('');
  const [listeTodo, setlisteTodo] = useState<string[]>([]);

  function HandleChange(e: ChangeEvent<HTMLInputElement>): void {
    setTache(e.target.value);
  }

  function HandleValidation(){
    if (todo !== ''){
      setlisteTodo(listeTachesActuelles => [...listeTachesActuelles, todo]);
    }
      }

function handleDelete(indexToDelete: number){
    // Mise à jour de l'état listeTodo
    setlisteTodo(listeTachesActuelles => 
      // Utilisation de la méthode filter pour créer un nouveau tableau
      listeTachesActuelles.filter(
        // Fonction de test pour chaque élément du tableau
        (_, index) => {
          // Le paramètre "_" représente l'élément actuel, mais il n'est pas utilisé dans cette fonction.
          // "index" est l'index de l'élément actuel dans le tableau.
  
          // La condition suivante détermine si l'élément doit être inclus dans le nouveau tableau.
          return index !== indexToDelete; // Renvoie true si l'index de l'élément n'est pas égal à indexToDelete.
        }
      )
    );
  }
  

  return (
    <div>
      <input onChange={HandleChange}/>
      <button onClick={HandleValidation}>Add todo</button>
      <div className='TodoContainer' style={{ display:"flex", flexDirection: "column" }}>
        <ul>
          {listeTodo.map((todoItem, index) => (
            // Chaque élément todo avec son propre bouton de suppression
            <div key={index} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <li style={{ marginRight: "10px" }}>{todoItem}</li>
              {/* Bouton de suppression pour cet élément spécifique */}
              <button onClick={() => handleDelete(index)} style={{ backgroundColor:"red" }}>delete</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;

// explication detaillé 

// import React, { useState } from 'react';

// const TodoApp = () => {
//     // Mise à jour de l'état : Lorsque vous souhaitez changer la valeur de tache, vous appelez setTache avec la nouvelle valeur
//   const [tache, setTache] = useState(''); // État pour la nouvelle tâche
//   const [listeTaches, setListeTaches] = useState<string[]>([]); // État pour la liste des tâches

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setTache(e.target.value); // Met à jour la tâche actuelle
//     console.log(setTache)
//   };
//   const handleSubmit = () => {
//     // Vérifie si l'état 'tache' n'est pas vide
//     if (tache !== '') {
//       // Si 'tache' contient une valeur, on exécute le code suivant
//       console.log(tache)
//       // Met à jour l'état 'listeTaches' en ajoutant la nouvelle tâche
//       // 'setListeTaches' est appelé avec une fonction fléchée qui prend l'état actuel
//       // de 'listeTaches' (nommé ici 'listeTachesActuelles') comme argument
//       setListeTaches(listeTachesActuelles => {
//         console.log(listeTachesActuelles)
//         // On retourne un nouveau tableau contenant toutes les tâches actuelles
//         // suivies de la nouvelle tâche
//         return [...listeTachesActuelles, tache];
//         console.log(listeTachesActuelles)
//       });
  
//       // Réinitialise l'état 'tache' pour effacer le champ de saisie
//       setTache('');
//     }
//     // Si 'tache' est vide, rien ne se passe lorsque l'utilisateur appuie sur le bouton
//   };
  

//   return (
//     <div>
//       <input 
//         value={tache}
//         onChange={handleInputChange}
//         placeholder="Entrez une nouvelle tâche"
//       />
//       <button onClick={handleSubmit}>Ajouter Tâche</button>
//       <ul>
//         {listeTaches.map((tache,index) => (
//           <li key={index}>{tache}</li> // Affiche chaque tâche
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoApp;