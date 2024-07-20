import {Component} from 'preact';
import {Display} from ''
const messages = [
  {id: 1, body: "test 1"},
  {id: 2, body: "test 2"}
]
class Chat extends Component {
  render() {
    return (
      <main id="chat">
        <div id="chatroom">
          <Display messages={messages} />
          <Controls />
        </div>
      </main>
    )
  }
}
