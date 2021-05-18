import client from "./../../client";
import { gql } from "@apollo/client";

function index({ ships }) {
  return (
    <div className="container">
      <h1>Ships list</h1>
      <div className="card-group">
        {ships.map((ship) => (
          <div className="col" key={ship.id}>
            <div className="card mb-3" style={{ width: 20 + "rem" }}>
              <img
                src={ship.image}
                alt="Image"
                className="card-img-top"
                width="310"
                height="200"
              />
              <div className="card-body">
                <div className="card-text">{ship.name}</div>
                <p>{ship.class}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const { data } = await client.query({
    query: gql`
      query Ships {
        ships {
          id
          name
          class
          image
        }
      }
    `,
  });

  return {
    props: {
      ships: data.ships,
    },
  };
}

export default index;
