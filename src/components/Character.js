import React from "react";
import useCharacter from "./useCharacter";

const Character = () => {
  const { data, loading, error } = useCharacter(5);
  if(loading){
    return <h1>Loading....</h1>
  }
  console.log(data);
  return (
    <>
      <img src={data.character.image} width={750} height={750} alt={"i"} />
      <div>
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div>
          {data.character.episode.map((episode) =>{
            return<div>
              {episode.name} - <b>{episode.episode}</b>
            </div>
          })}
        </div>
      </div>
    </>
  );
};

export default Character;
