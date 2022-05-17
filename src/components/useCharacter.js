import { gql, useQuery } from "@apollo/client";

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      gender
      episode{
        name
        episode
      }
    }
  }
`;

const useCharacter = (id) => {
  const { data, error, loading } = useQuery(GET_CHARACTER, {
    variables: {
      id: id,
    },
  });
  console.log(error, loading, data);
  return {
    data,
    error,
    loading,
  };
};

export default useCharacter;
