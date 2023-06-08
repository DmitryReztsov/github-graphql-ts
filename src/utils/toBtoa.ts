export default (num: number) => btoa(`cursor:${((num - 1) * 10).toString()}`)
