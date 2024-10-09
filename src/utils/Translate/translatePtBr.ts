import translate from "translate";
translate.engine = "google";

async function translatePtBr(text: string): Promise<string | undefined> {
    try {
        const result = await translate(text, 'por');

        return result
    } catch (error) {
        console.error("Erro na tradução: ", error);
    }
}

export default translatePtBr;