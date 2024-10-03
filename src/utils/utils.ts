type ClassValue = string | number | boolean | undefined | null;

export const clsx = (...args: ClassValue[]): string => {
    return args
        .filter(Boolean)
        .map(arg => String(arg))
        .join(' ');
}