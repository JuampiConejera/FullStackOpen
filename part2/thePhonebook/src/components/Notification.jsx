export const Notification = ( { message }) => {
    if (message.text === null) {
        return null
    }

    return (
        <div className={message.type === 'success' ? 'success' : 'error'}>
            <h1>{message.text}</h1>
        </div>
    )
}