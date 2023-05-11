/**
 * Este componente es el encargado de mostrar un spinner de carga
 * @returns component
 * @example <Loading />
 */
const Loading = () => (
    <div className="h-screen flex flex-col bg-primary dark:bg-dark_primary">
        <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
            <div className="flex justify-center">
                <div className="inline-block w-16 h-16 border-4 border-light_purple dark:border-dark_purple border-t-transparent dark:border-t-transparent rounded-full animate-spinner"></div>
            </div>
        </div>
    </div>
)

export default Loading
