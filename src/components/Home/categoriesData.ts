import { assimQueAcaba, bookOtherWordsForHome, bookTheMetropolis, bookTheTinyDragon } from "./booksData"

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
            assimQueAcaba
        ]
    },

]