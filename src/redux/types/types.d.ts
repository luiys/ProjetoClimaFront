export type AsyncGetPattern<T> = {
    loading: boolean;
    data: null | T
    error: boolean
}