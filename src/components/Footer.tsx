export const Footer = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
          fontSize: "1.5rem",
        }}
      >
        <p style={{ display: "inline", fontSize: "1.5rem" }}> &copy;</p>
        {}
        <a
          href="mailto:jenny.waller@medieinstitutet.se"
          target="_blank"
          style={{ display: "inline", color: "black", marginInline: "0.25rem" }}
        >
          Jen Waller
        </a>{" "}
        2023
      </div>
    </>
  );
};
