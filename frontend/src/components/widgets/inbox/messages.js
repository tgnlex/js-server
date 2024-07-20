function Messages(props) {
  return (
    <div class="messages">
      {props.messages.map((message) => (
        <div id={`message-${message.id}`} key={message.id} class="message">
          <p>{props.time}</p>
          <p class="message-body">{message.body}</p>
        </div>
      ))}
    </div>
  )
};
export {Messages};
