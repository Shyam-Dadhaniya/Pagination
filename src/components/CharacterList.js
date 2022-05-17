import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./CharacterList.css";
import useCharacter from "./useCharacters";
import { Button } from "react-bootstrap";
const CharacterList = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const { error, loading, data } = useCharacter(page);

  if (loading) return <div>loading...</div>;
  if (error) return <div>error...</div>;
  const nextHandler = () => {
    navigate(`/pagination/${data.characters.info.next}`);
  };
  const prevHandler = () => {
    navigate(`/pagination/${data.characters.info.prev}`);
  };
  console.log({ loading, error, data });
  return (
    <>
      <div className="Characters">
        {data.characters.results.map((character) => {
          return (
            // <div>
            //   <img src={character.image} alt={"tag"} />
            //   <h2>{character.name}</h2>
            // </div>
            <div className="card mb-3" style={{width: "200px"}}>
              <img
                className="mb-3"
                src={character.image}
                alt={character.name}
                style={{ height: "200px", width: "200px" }}
              />
              <h1>{character.name}</h1>
            </div>
          );
        })}

        {/* {data.characters.info.next && (
        <Link to={`/pagination/${data.characters.info.next}`}>Next</Link>
      )}
      {data.characters.info.prev && (
        <Link to={`/pagination/${data.characters.info.prev}`}>Previous</Link>
      )} */}
      </div>
      <div>
        {data.characters.info.prev && (
          <Button onClick={prevHandler} style={{marginRight: "10px"}}>Previous</Button>
        )}
        {data.characters.info.next && (
          <Button onClick={nextHandler} >Next</Button>
        )}
      </div>
    </>
  );
};

export default CharacterList;
