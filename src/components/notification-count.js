export default function NotificationCount({ testCount, clickHandler }){
        
    return (
        <div className="count">
            <div>
                <h3>Notifications <span>{testCount}</span></h3>
            </div>
            <div>
                <p onClick={() => clickHandler()}>Mark all as read</p>
            </div>
        </div>
    )
}