import Wrapper from "../assets/wrappers/CocktailList"
import CocktailCard from "./CocktailCard"

const CocktailList = ({ drinks }) => {
    if (!drinks) {
        return <h4 style={{ textAlign: 'center' }}>no drinks found</h4>
    }

    const formattedDrinks = drinks.map(drink => {
        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = drink
        return { id: idDrink, name: strDrink, img: strDrinkThumb, info: strAlcoholic, glass: strGlass }
    })

    return (
        <Wrapper>
            {formattedDrinks.map(formattedDrink => {
                return <CocktailCard key={formattedDrink.id}
                    drink={formattedDrink} />
            })
            }
        </Wrapper>
    )
}

export default CocktailList