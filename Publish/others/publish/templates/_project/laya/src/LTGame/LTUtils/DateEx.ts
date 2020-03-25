export default class DateEx {

    static GetTotalDays(date: Date) : number {
        return date.getFullYear() * 372 + date.getMonth() * 31 + date.getDate();
    }

}