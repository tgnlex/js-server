function cleanup(event, listener) {
  return () => window.removeEventListner(`${event}`, listener) 
}


function WindowSize(props) {
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0);
  function onResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight)
  } o
  useEffect(() => {
    window.addEventListener('resize', onResize);
    return cleanup('resise', onResize)
  }, []);  
  return (
    <div id="window-info">
      <h3>Window</h3>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </div>
  )
  }
