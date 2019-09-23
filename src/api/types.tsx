export interface RecipeT {
  available_market_id: number[];
  id: number;
  ingredients_included: number[];
  name: string;
  note: string;
  rating: number;
  times_bought: number;
}

export interface IngredientT {
  id: number;
  name: string;
  available_market_id: number;
  recipe_included: number[];
  note: string;
}

export interface MarketT {
  id: number;
  name: string;
  ingredients_available: number[];
  times_visited: number;
  rating: number;
  preferred_recipe_id: number[];
  note: string;
}

export interface RecipeState {
  recipes: RecipeT[],
}

export interface IngredientState {
  ingredients: IngredientT[];
}

export interface MarketState {
  markets: MarketT[];
}

export interface AppState {
  recipes: RecipeState;
  ingredients: IngredientState;
  markets: MarketState;
}