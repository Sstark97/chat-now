import { BsSearch } from "react-icons/bs"

const Searcher = () => (
    <div className="bg-secondary w-[90%] flex justify-between items-center mt-7 mx-auto p-3 rounded-2xl">
        <BsSearch />
        <input className="w-[88%] bg-transparent placeholder:text-black focus:outline-0" type="text" placeholder="Buscar" />
    </div>
)
export default Searcher