import "./OmeletteRecipe.css";

const OmeletteRecipe = ({}) => {
  return (
    <div className="omeletterecipe">
      <div className="recipe">
        <div className="recipeImg"></div>

        <h2 className="tittleRecipe">Simple Omelette Recipe</h2>

        <p>
          An easy and quick dish, perfect for any meal. This classic omellette
          combines beaten eggs cookend to perfection, optionally filled with
          your choise of cheese, vegetables, or meats.
        </p>

        <div className="preparationTime">
          <h3>Preparation time</h3>
          <ul>
            <li>
              <span className="spanGray">Total</span>: Approximately 10 minutes
            </li>
            <li>
              <span className="spanGray">Preparation </span>: 5 minutes
            </li>
            <li>
              <span className="spanGray">Cooking </span>: 5 minutes
            </li>
          </ul>
        </div>

        <h2 className="TitleSection">Ingredients</h2>
        <ul className="IngredientsSection">
          <li>2-3 large eggs</li>
          <li>Salt, to taste</li>
          <li>Pepper, to taste</li>
          <li>1 tablespoon of butter or oil</li>
          <li>
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </li>
        </ul>
        <hr />
        <h2 className="TitleSection">Instructions</h2>
        <ol className="InstructionsSection">
          <li>
            <span className="spanGray"> Beat the eggs </span>: In a bowl, beat
            the eggs with a pinch of salt and pepper ultil they are well mixed,
            Yoy can add a tablespoon of water or milk for a fluffier texture.
          </li>
          <li>
            <span className="spanGray">Heat the pan </span>: Place a non-stick
            frying pan over medium heat and add butter or oil
          </li>
          <li>
            <span className="spanGray"> Cook the omellette </span>: Once the
            butter is melted and bubbling, pour in the eggs. Tilt the pan to
            ensure the eegs evenly coat the surface.
          </li>
          <li>
            <span className="spanGray">Add fillings (optional) </span>: When the
            eggs begin to set at the edges but are still slightly runny in the
            middle, sprikle you chosen fillings over one half of the omelette.
          </li>
          <li>
            <span className="spanGray">Fold and serve </span>: As the omellette
            contunues to cook, carefully lift one edge and Ffold it over the
            fillings. Let it cook for anothe minute, then slide it onto a plate.
          </li>
          <li>
            <span className="spanGray">Enjoy </span>: Serve hot, with additional
            salt and pepper if needed
          </li>
        </ol>
        <hr />
        <h2 className="TitleSection">Nutrition</h2>
        <p>
          The table below shows nutritional values per serving without the
          additional fillings
        </p>

        <table>
          <tr>
            <td>Calories</td>
            <td>277kcal</td>
          </tr>
          <tr>
            <td>Carbs</td>
            <td>0g</td>
          </tr>
          <tr>
            <td>Protein</td>
            <td>20g</td>
          </tr>
          <tr>
            <td>Fat</td>
            <td>22g</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default OmeletteRecipe;
