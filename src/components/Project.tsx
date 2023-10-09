import { useNavigate, useParams } from "react-router-dom";
import { Section } from "./styled/Sections";
import { Button } from "./styled/Buttons";

export const Project = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const getBackButton = () => {
    navigate("/");
  };

  const idToNumber: number = Number(id);
  //rendera lista med projekt och hitta id.
  console.log(idToNumber);
  return (
    <>
      <Section>Projectpage {id} </Section>
      <Button onClick={getBackButton}>Tillbaka</Button>
    </>
  );
};
