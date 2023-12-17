import styled from "styled-components";
import { FontHeading, grey100, grey700 } from "./variables";

export const Form = styled.form`
  width: 350px;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  color: ${grey100};
`;

export const Label = styled.label`
  font-size: 1rem;
  display: block;
  margin-bottom: 1rem;
`;

export const StyledInput = styled.input`
  font-family: ${FontHeading};
  color: ${grey700};
  font-size: 1rem;
  width: 100%;
  margin: 0;
  background-color: ${grey100};
  padding: 1rem;
  border: none;
  /* outline: none; */

  &[type="email"] {
    width: 100%;
    margin: 0;
    background-color: ${grey100};
    color: ${grey700};
    padding: 1rem;
    border: none;
    /* outline: none; */
  }
`;

export const Textarea = styled.textarea`
  display: block;
  width: 100%;
  height: 200px;
  font-family: ${FontHeading};
  background-color: ${grey100};
  padding: 1rem;
  border: none;
  /* outline: none; */
`;
