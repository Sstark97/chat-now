export const equals = (data: object, contacts: object) =>
    JSON.stringify(data) !== JSON.stringify(contacts)
