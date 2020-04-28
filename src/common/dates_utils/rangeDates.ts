export const getDatesInRange = (start: Date, end: Date) => {
    const d = new Date(start);

    const dates = [];

    while (d <= end) {
        dates.push(new Date(d));
        d.setDate(d.getDate() + 1);
    }

    return dates;
}