import { useQuery, gql } from "@apollo/client";
const GET_DATA = gql`
  query ($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        image
      }
      info {
        count
        pages
        next
        prev
      }
    }
  }
`;
const useCharacter = (page) => {
  const { error, loading, data } = useQuery(GET_DATA, {
    variables: {
      page: Number(page),
    },
  });
  return { error, loading, data };
};

export default useCharacter;
