export const OrderStatus = {
    Process: 1,
    Done: 2,
    Error: 3,
    Cancel: 4
}

export const OrderStatusMap = {
    [OrderStatus.Process]: "已下注",
    [OrderStatus.Done]: "已結算",
    [OrderStatus.Error]: "異常注單",
    [OrderStatus.Cancel]: "已註銷",
}