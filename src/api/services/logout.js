
function logout(req) {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
    } else {
      res.redirect('http://localhost:3000/login')
    }
  })
}

export {logout};
