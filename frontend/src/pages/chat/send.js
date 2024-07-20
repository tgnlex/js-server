

function SendMessage() {
  return (
    <form>
      <textarea 
        id="message" 
        name="message" 
        type="text"
        class="form-control"
        placeholder="Enter your message..."
        rows=3
        cols=20
        required>
   
      </textarea>
    </form>
  )
}
