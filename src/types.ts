export type Plant = {
    name: string
    category: string
    id: string
    light: number
    water: number
    cover: string
    price: number
    description : string
}

export type CartItem = {
    name: string
    price: number
    amount : number
}

export type PaymentResult = {
    success:boolean
    transactionId:string
    amount:number
    currency:string
    status:string
    timestamp:string
}

export type PaymentData = {
    amount:number
    cardNumber:string
    expiryDate:string
    cvv:string
    cardholderName:string
}