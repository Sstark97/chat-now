const Loading = () => (
    <div className="h-screen flex flex-col bg-primary">
        <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
            <div className="flex justify-center">
                <div className="inline-block w-16 h-16 border-4 border-light_purple border-t-transparent rounded-full animate-spinner"></div>
            </div>
        </div>
    </div>
)

export default Loading
