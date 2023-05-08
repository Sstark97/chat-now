enum STATE_VALUES {
    online = "Disponible",
    busy = "Ocupado",
    absent = "Ausente",
    offline = "Desconectado",
}

const STATE_VALUES_ARRAY = Object.keys(STATE_VALUES).map(
    (key) => STATE_VALUES[key as keyof typeof STATE_VALUES]
)

export { STATE_VALUES, STATE_VALUES_ARRAY }
