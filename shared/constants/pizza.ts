const mapSize = {
    20: "Маленькая",
    30: "Средняя",
    40: "Большая"
} as const

const mapPizzaType = {
    1: "традиционное",
    2: "тонкое",
} as const

const pizzaSizes = Object.entries(mapPizzaType).map(([name, value]) => ({
    name,
    value
}))