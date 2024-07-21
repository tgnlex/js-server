
function Compose() {
  return (
    <div class="compose">
      <h1>Write a message</h1>
      <form id="form-compose" class="form">
      <input 
        id="user" 
        name="user" 
        class="form-control form-control-user"
        placeholder="Enter the user to send your message to." 
        required 
      />
      <input 
        id="message" 
        name="message" 
        class="form-control form-control-message"  
        placeholder="Enter a title for your message"
        required
      />
       <button 
        id="btn-compose" 
        class="btn btn-submit" 
        type="submit">
         Submit!
       </button>
      </form>
    </div>
  )
}

export {Compose};
