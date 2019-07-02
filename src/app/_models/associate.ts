// TODO: this should match the actual data we get, more fields need to be added?
export interface Associate {
  win: number; // every associate has a 'Walmart Identification Number'
  storeId: number; // every associate is assigned to a unique store (but is not necessarily limited to there store)
  name: string; // simple sting for associates name
  email: string; // every associate has an assigned walmart email address
  isManager: boolean; // is this associate a manager?
  managersId: number; // the manager of this associate if applicable
  // are we storing the managers info here? or referencing the managers info via the number
}
