import { Recipe, CreateRecipeInput, MarketRecipeList } from "../models.js"

export interface IRecipeService {
  list(filter?: { categoryId?: string; categoryName?: string; search?: string ;marketKart?: Array<string> }): Promise<Recipe[]|MarketRecipeList>
  get(id: string): Promise<Recipe>
  create(input: CreateRecipeInput): Promise<Recipe>
  update(id: string, data: Partial<CreateRecipeInput>): Promise<Recipe>
  delete(id: string): Promise<void>
  publish(id: string): Promise<void>
  arquive(id: string): Promise<void>
  escalarReceita(id: string, novasPorcoes: number): Promise<Recipe>
}
