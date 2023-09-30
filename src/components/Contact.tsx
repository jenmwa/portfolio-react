import { Button } from "./styled/Buttons";

export const Contact = () => {
  return (
    <>
      <div style={{ backgroundColor: "#2a2e45" }}>
        <h2 style={{ color: "whitesmoke" }}>Contact</h2>
        <form>
          <label>
            Namn:
            <input type="text"></input>
          </label>
          <label>
            E-post:
            <input type="mail"></input>
          </label>
          <label>
            <textarea></textarea>
          </label>
        </form>
        <Button style={{ backgroundColor: "whitesmoke", color: "#2a2e45" }}>
          Button in Contact
        </Button>
      </div>
    </>
  );
};
