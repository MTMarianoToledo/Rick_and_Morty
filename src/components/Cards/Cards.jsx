import Card from './Card';

export default function Cards({characters, onClose}) {
   return (
      <div>
         {characters.map((char) => {
            return ( <Card key={char.id}
             id = {char.id}
             name = {char.name}
             image = {char.image}
             status = {char.status}
             specie = {char.species}
             gender = {char.gender}
             onClose = {onClose}
             />
             );
         })}
      </div>
   );
}
