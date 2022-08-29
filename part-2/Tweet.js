function Tweet({username, name, date, message, favoriteColor}) {
    const myStyles = {
        backgroundColor: favoriteColor
    }
    
    return (
        <div style={myStyles}>
            <span>{name} </span>
            <span>{username} </span>
            <span>{date} </span>
            <p>{message}</p>
        </div>
    )
}