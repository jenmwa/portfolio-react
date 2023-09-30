import { FormEvent } from "react";
import { Button } from "./styled/Buttons";
import { Form, Label, StyledInput, Textarea } from "./styled/Forms";

export const ContactForm = () => {
  const handleSubmit = (e: FormEvent) => {
    console.log("submit");
    e.preventDefault();
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          Namn:
          <StyledInput type="text"></StyledInput>
        </Label>
        <Label>
          E-post:
          <StyledInput type="mail"></StyledInput>
        </Label>
        <Label>
          Ditt meddelande:
          <Textarea></Textarea>
        </Label>
        <Button style={{ backgroundColor: "whitesmoke", color: "#2a2e45" }}>
          Button in Contact
        </Button>
      </Form>
    </>
  );
};
