export interface Expense {
  id: string,
  title: string,
  amount: number,
  taxes?: number,
  category: string,
  paymentType: string,
}

export interface Income {
  id: string,
  title: string,
  amount: number,
  taxes?: number,
  category: string,
  paymentType: string,
}