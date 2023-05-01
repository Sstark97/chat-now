import moment from "moment"

const date = new Date()
const today = `${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}/${
    date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
}/${date.getFullYear()}`

const formatDate = (date: string | undefined) => {
    moment(date).format("L") === today ? moment(date).format("HH:mm") : moment(date).format("L")

    return "a"
}

export { formatDate }
