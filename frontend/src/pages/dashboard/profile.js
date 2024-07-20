

function Profile(props) {
  let user = props.user;
  let profile = props.profile;
  function editBio() {
    window.location.href=`/dashboard/edit/bio`;
  }
  return (
    <section id="profile">
      <h3>{user.username}</h3>
      <div id="avatar">{profile.avatar || "Profile Avatar"}</div>
      <div id="bio">
        <textarea id="bio-text" class="border" readonly>  
          {profile.bio || "Profile Bio"}
        </textarea>
        <button 
          id="btn-bio" 
          class="btn btn-bio btn-edit"
          onClick={editBio}
        >
        Edit Bio
        </button>
      </div>
      <section id="info">
          <h4 id="info-heading">Profile Info</h4>
          <p id="info-name">
            Name: {user.firstname || "firstname"} {user.lastname || "lastname"}
          </p>
          <p id="info-age">Age: {user.age || "user age"}</p>
          <p id="info-email">Email: {user.email || "user email"}</p>
      </section>
    </section>
  )
}

export {Profile}
