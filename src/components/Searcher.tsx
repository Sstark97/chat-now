import { BsSearch } from "react-icons/bs"

/**
 * Este componente se encarga de crear el buscador de la página
 * @returns component
 * @example <Searcher />
 */
const Searcher = () => (
    <div className="bg-secondary dark:bg-dark_secondary w-[90%] flex justify-between items-center mt-7 mx-auto p-3 rounded-2xl">
        <BsSearch />
        <input
            className="w-[88%] bg-transparent placeholder:text-black dark:placeholder:text-white focus:outline-0"
            type="text"
            placeholder="Buscar"
        />
    </div>
)
export default Searcher
