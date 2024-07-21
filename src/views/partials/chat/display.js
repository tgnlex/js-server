

function Display() {
  return (
    <div id="display">
      <ul id="messages" class="messages list">
        {props.messages.map((message) => (
          <li key={message.id} class="message">
            <time class="message-time">{Date.toLocaleString()}</time>
            <p class="message-body">{message.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export {Display};
