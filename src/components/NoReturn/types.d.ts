export type NoReturnProps = {
    jsxType: 'list' | 'default',
    errorType: 'databaseError' | 'noDataReturn',
    message?: string | undefined,
}

export type MessageProps = {
    text: string | undefined,
}