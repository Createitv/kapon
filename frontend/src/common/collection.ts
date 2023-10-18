export function groupedData(data: any[], key: string) {
    return data.reduce((result, item) => {
        let usageDepartment = item[key];
        if (!result[usageDepartment]) {
            result[usageDepartment] = [];
        }
        result[usageDepartment].push(item);
        return result;
    }, {});
}
