function index({ characters }) {
  return (
    <div className="container">
      <h1>Rick and Morty</h1>
      <div className="card-group">
        {characters.data.characters.results.map((character) => (
          <div className="col" key={character.id}>
            <div className="card mb-3" style={{ width: 20 + "rem" }}>
              <img
                src={character.image}
                alt="Image"
                className="card-img-top"
                width="310"
                height="200"
              />
              <div className="card-body">
                <div className="card-text">{character.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const url = "https://rickandmortyapi.com/graphql";
  const body = { "query": "query{characters{results{id name image}}}" };

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(body),
  });

  const characters = await res.json();

  return {
    props: {
      characters,
    },
  };
}

export default index;
