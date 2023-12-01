import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
export const formatPrice = (price: number) => {
    const formattedPrice = Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        currencyDisplay: 'code'
    }).format(price)
    const formattedPriceWithoutVND = formattedPrice.replace('VND', '')
    return formattedPriceWithoutVND + '<sup>đ</sup>'
}
export const isUserAllowed = (user: any, roles: any) => {
    // 'admin' có quyền truy cập tất cả
    if (user.roles.includes('admin')) {
        return true
    }
    // Nếu không phải 'admin' thì kiểm tra xem user có role nào trong mảng roles không
    const userRoles = Array.isArray(roles) ? roles : [roles]
    // Nếu user có ít nhất 1 role trong mảng roles thì được phép truy cập
    return userRoles.some((role) => user.roles.includes(role))
}
