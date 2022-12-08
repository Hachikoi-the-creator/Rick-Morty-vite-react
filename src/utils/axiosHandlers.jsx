export async function getTotalChara() {
  const res = await fetch("https://rickandmortyapi.com/api/character").then(
    (data) => data.json()
  );

  return res.info.count;
}
