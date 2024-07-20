import {Route} from './util/route.js';
import {Compose} from './compose.js';

  
function Inbox(props) {
  const data = [
    {id: 1, senderID: 1, receiverID, 2 body: "test 1"},
    {id: 2, senderID: 1, receiverID: 2, body: "test 2"},
    {id: 3, senderID: 1, receiverID: 2, body: "test 3"}
  ]
  
  return (
    <div class="inbox">
      <Messages messages={data} />
      <Route path="/compose">
        <Compose />
      </Route>
    </div>
  )
}


