export type Author = {
  id: string
  name: string
}
export type Decks = {
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover?: any
  created: string
  updated: string
  cardsCount: number
  isFavorite: boolean
  author: Author
}

export type Pagination = {
  totalItems: number
  currentPage: number
  itemsPerPage: number
  totalPages: number
}

export type DecksListResponse = {
  items: Decks[]
  pagination: Pagination
}

export type GetDecksArgs = {
  minCardsCount?: number
  maxCardsCount?: number
  name?: string
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  orderBy?: string
}
