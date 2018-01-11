export class Utils {
    public static generateId(countChars: number): string {
        let i: number;
        let id: string = "";
        const possibleChars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const countOfPossibleChars: number = possibleChars.length;
        for (i = 0; i < countChars; i++) {
            id += possibleChars.charAt(Math.floor(Math.random() * countOfPossibleChars));
        }
        return id;
    }
}
