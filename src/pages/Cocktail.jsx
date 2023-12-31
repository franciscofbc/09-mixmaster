import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useLoaderData, Link, Navigate, useLocation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/CocktailPage';

const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const singleCocktailQuery = (id) => {
  return {
    queryKey: ['cocktail', id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailUrl}${id}`);
      return data
    }
  }
}

export const loader = (queryClient) => async ({ params }) => {
  const { id } = params;
  // const { data } = await axios.get(`${singleCocktailUrl}${id}`);
  // return { id, data };
  await queryClient.ensureQueryData(singleCocktailQuery(id))
  return { id };
};

const Cocktail = () => {
  // const { id, data } = useLoaderData();
  const { id } = useLoaderData();
  const location = useLocation()
  const { data } = useQuery(singleCocktailQuery(id))

  //   for invalid id
  //   if (!data.drinks) return <h2>something went wrong</h2>;
  if (!data.drinks) return <Navigate to="/" />;

  const singleDrink = data.drinks[0];

  const {
    strDrink: name,
    strDrinkThumb: img,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  const validIngredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith('strIngredient') && singleDrink[key] !== null
    )
    .map((key) => singleDrink[key]);

  return (
    <Wrapper>
      <header>
        <Link to={location.state.search ? `/?${location.state.search}` : '/'}
          className="btn">
          back to home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={img} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info:</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass:</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">ingredients:</span>
            {validIngredients.map((validIngredient, index) => {
              return (
                <span className="ing" key={validIngredient}>
                  {validIngredient}
                  {validIngredients.length - 1 > index ? ',' : '.'}
                </span>
              );
            })}
          </p>
          <p>
            <span className="drink-data">instructions:</span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cocktail;
