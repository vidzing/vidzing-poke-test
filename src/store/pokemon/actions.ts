import type * as types from "./types";
import * as actionTypes from "./actions.types";
import { PokemonInterface } from "@/shared/interfaces/pokemon.interface";

/****************************** GET POKEMON LIST **********************************/
export const getPokemonList = (): types.GetPokemonList => ({
  type: actionTypes.GET_POKEMON_LIST,
});

export const getPokemonListSuccess = (
  payload: PokemonInterface[]
): types.GetPokemonListSuccess => ({
  type: actionTypes.GET_POKEMON_LIST_SUCCESS,
  payload,
});

export const getPokemonListFailure = (
  payload: string
): types.GetPokemonListFailure => ({
  type: actionTypes.GET_POKEMON_LIST_FAILURE,
  payload,
});
