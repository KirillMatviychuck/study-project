type Mods = Record<string, string | Boolean>

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []) {
    return [
        cls,
        ...additional.filter(Boolean),
        Object.entries(mods)
            .filter(([classNames, value]) => Boolean(value))
            .map(([classNames]) => classNames)
    ]
        .join(' ')
}

