export const Notification = ( { message }) => {
    if (message === null) {
        return null
    }

    return (
        <div className="messageChange">
            <h1>{message}</h1>
        </div>
    )
}