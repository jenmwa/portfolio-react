import { useParams } from "react-router-dom";
import { Section } from "./styled/Sections";

export const Project = () => {
  const { id } = useParams();
  const idToNumber: number = Number(id);
  //rendera lista med projekt och hitta id.
  console.log(idToNumber);
  return (
    <>
      <Section>Projectpage {id}</Section>
      {id}
    </>
  );
};
