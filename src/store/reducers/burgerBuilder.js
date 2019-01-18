import * as actionTypes from './../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
};

const INGREDIENT_PRICES =  {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3,
    chicken: 2.0
}

const addIngredient = ( state, action ) => {
    const updatedIngredientAdd = { [ action.ingredientName ]: state.ingredients[ action.ingredientName ] + 1 };
    const updatedIngredientsAdd = updateObject( state.ingredients, updatedIngredientAdd );
    const updatedStateAdd = {
        ingredients: updatedIngredientsAdd,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[ action.ingredientName ]
    };

    return updateObject( state, updatedStateAdd );
};

const removeIngredient = ( state, action ) => {
    const updatedIngredientRem = { [ action.ingredientName ]: state.ingredients[ action.ingredientName ] - 1 };
    const updatedIngredientsRem = updateObject( state.ingredients,updatedIngredientRem );
    const updatdStateRem = {
        ingredients: updatedIngredientsRem,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[ action.ingredientName ]
    };
    return updateObject( state, updatdStateRem );
};

const setIngredients = ( state, action ) => {
    return updateObject( state, {
        ingredients: action.ingredients.ingredients,
        error: false,
        totalPrice: 4
    });
};

const fetchIngredientsFailed = ( state, action ) => {
    return updateObject( state, { error: true });
};

const reducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case actionTypes.ADD_INGREDIENT: return addIngredient( state, action );
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient( state, action );
        case actionTypes.SET_INGREDIENTS: return setIngredients( state, action );
        case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed( state, action );
        default: return state;
    }
}

export default reducer;