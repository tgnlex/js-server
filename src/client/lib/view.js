
function view(path, params={}, res=res) {
  res.render(`${__view}/${path}`, params)
}
export {view};
