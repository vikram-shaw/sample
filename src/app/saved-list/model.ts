export interface SavedItem {
  id: number,
  date: Date | null,
  name: string,
  entityCount: number,
  action: Action,
  details: string[]
}

export interface Action {
  message: boolean,
  share: boolean,
  edit: boolean,
  delete: boolean
}
