export default function InProgress() {
  const s = {
    width: "80%",
    borderRadius: "1rem",
    margin: "2rem 10%",
  };

  const h = {
    marginTop: "2rem",
    color: "white",
    textAlign: "center",
  };

  return (
    <div>
      <h1 style={h}>Work in poggers</h1>
      <img
        src="/in-progress.jpg"
        alt="rick & morty speedrun building something"
        style={s}
      />
    </div>
  );
}
