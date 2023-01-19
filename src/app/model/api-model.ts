export interface PokeApiResult {
  count: number;
  next: string | null;
  previous: string | null;
  results: ListOfPokemon[]
}

export interface ListOfPokemon {
  name: string;
  url: string;
  status?: PokemonDetails;
}

interface NameUrl {
  name: string;
  url: string;
}

export interface PokemonDetails {
  id: number,
  name: string,
  base_experience: number,
  height: number,
  is_default: boolean,
  order: number,
  weight: number,
  abilities: PokemonAbilities[],
  forms: NameUrl[],
  game_indices: GameIndices[],
  held_items: HeldItems[],
  location_area_encounters: string,
  moves: Moves[],
  species: NameUrl;
  sprites: Sprites;
  stats: Stats[],
  types: Types[],
  past_types: PastTypes[]
}

interface PokemonAbilities {
  is_hidden: boolean;
  slot: number;
  ability: NameUrl;
}

interface HeldItems {
  item: NameUrl;
  version_details: VersionDetails[];
}

interface VersionDetails {
  rarity: number;
  version: NameUrl;
}

interface Moves {
  move: NameUrl;
  version_group_details: VersionGroupDetails[];
}

interface VersionGroupDetails {
  level_learned_at: number;
  move_learn_method: NameUrl;
  version_group: NameUrl;
}

interface GameIndices {
  game_index: number;
  version: NameUrl;
}

interface Sprites {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
  other: {
    dream_world: {
      front_default: string;
      front_female: string | null;
    };
    home: {
      front_default: string;
      front_female: string | null;
      front_shiny: string;
      front_shiny_female: string | null;
    };
    'official-artwork': {
      front_default: string;
    }
  },
  versions: Versions;
}

interface Versions {
  [chave: string]: {
    [chave: string]: {
      [chave: string]: any;
    }
  }
}

interface Stats {
  base_stat: number;
  effort: number;
  stat: NameUrl;
}

interface Types {
  slot: number,
  type: NameUrl;
}

interface PastTypes {
  generation: NameUrl;
  types: Types[]
}