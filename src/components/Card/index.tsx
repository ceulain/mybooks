// {
//     airId: "rec4J5mqVxBifZ2uf",
//     author: "Bruno David",
//     title: "A l'Aube de la sixième extinction",
//     couverture: {
//       id: "atta5akSrL8KLNCwD",
//       url: "https://dl.airtable.com/.attachments/97d37c07db4e2ae971685d6c4ab3a6bd/10a90fb9/david.jpeg",
//       filename: "david.jpeg",
//       size: 238428,
//       type: "image/jpeg",
//       thumbnails: {
//         small: {
//           url: "https://dl.airtable.com/.attachmentThumbnails/b825ab2c9d52a3b99948e94b096f625f/ce8ad983",
//           width: 25,
//           height: 36,
//         },
//         large: {
//           url: "https://dl.airtable.com/.attachmentThumbnails/3222b3b9b9b1cce9673fb1d37affb7ac/788d0b20",
//           width: 512,
//           height: 749,
//         },
//         full: {
//           url: "https://dl.airtable.com/.attachmentThumbnails/fef183929bfd1d7c5c0301ffb5531b84/2fcb344e",
//           width: 3000,
//           height: 3000,
//         },
//       },
//     },
//     pages: null,
//     summary:
//       "« Juillet 2019, il fait 42,6 c° au parc Montsouris à Paris, dans le Languedoc on enregistre 46°c à l’ombre. C’est une fournaise. Quelques mois plus tard, des tempêtes de feu ravagent l’Australie et on s’émeut de voir la faune et la flore dévorées par les flammes. Ce fameux mois de juillet 2019 aura été le plus chaud enregistré sur terre depuis que les relevés météorologiques existent. Le réchauffement climatique n’est plus une hypothèse, c’est un fait vérifiable par tous : la banquise arctique a perdu 96% de sa surface en 35 ans, le permafrost, cette bande de gel qui ceinture le grand Nord, recule, et chaque année le niveau des océans montent un peu plus.» Véritable plaidoyer pour la protection de notre planète, de sa faune et de sa flore. Bruno David pousse un cri d'alerte sur la dégradation actuelle de l'environnement et de ses dangereuses conséquences.\n",
//     difficulte: 1,
//     categories: ["Sciences et technologies"],
//     types: ["Essai"],
//     main_objectives: ["Se cultiver"],
//     secondary_objectives: [],
//     score: 3,

import { Book } from "../../data/types";
import "./inxde.css";

//   }
const Card = ({ author, title }: Book) => {
  return (
    <article>
      <h3>{title}</h3>
      <p>{author}</p>
    </article>
  );
};

export default Card;
