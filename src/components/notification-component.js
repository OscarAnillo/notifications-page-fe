export default function SimpleNotification({
  readMessageState,
  avatar,
  name,
  text,
  activity_post,
  activity_game,
  message,
  picture,
  timeStamp,
  readMessage,
}) {
  return (
    <div>
      {readMessage ? (
        <div className={`${readMessageState ? "notification" : "unread"}`}>
          <div className="notification-row">
            <div>
              <img src={avatar} alt="" />
            </div>
            <div>
              <p>
                <strong className="name">{name}</strong> <span className="text">{text}</span>
                <span className="activity-post">
                  {activity_post}
                  <span className="game">{activity_game}</span>
                  {!readMessageState ? <span className="red-dot"></span> : " "}
                </span>
                <br />
                <span className="time">{timeStamp}</span>
              </p>
            </div>
          </div>
          <div className={`${message ? "message" : null}`}>
            <p>{message}</p>
          </div>
        </div>
      ) : (
        <div className="notification">
          <div className="notification-row">
            <div>
              <img src={avatar} alt="" />
            </div>
            <div>
              <p>
                <strong className="name">{name}</strong> <span className="text">{text}</span>
                <span className="activity-post">
                  {activity_post}
                  <span className="game">{activity_game}</span>
                </span>
                <br />
                <span className="time">{timeStamp}</span>
              </p>
            </div>
            {picture ? (
              <div className="picture-chess">
                <img src={picture} alt="" />
              </div>
            ) : (
              " "
            )}
          </div>

          <div className={`${message ? "message" : null}`}>
            <p>{message}</p>
          </div>
        </div>
      )}
    </div>
  );
}
