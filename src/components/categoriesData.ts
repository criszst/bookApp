import { assimQueAcaba, bookOtherWordsForHome, bookTheMetropolis, bookTheTinyDragon, end, endd, us } from "./booksData"

export const categoriesData = [
    {
        id: 1,
        categoryName: "Mais Vendidos",
        books: [
            bookOtherWordsForHome, bookTheMetropolis, bookTheTinyDragon
        ]
    },
    {
        id: 2,
        categoryName: "Recentes",
        books: [
            bookTheMetropolis
        ]
    },
    {
        id: 3,
        categoryName: "À Chegar",
        books: [
            bookTheTinyDragon,
            assimQueAcaba,
            endd,
            end,
            us
        ]
    },

]