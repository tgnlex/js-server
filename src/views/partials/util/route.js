import { createContext } from 'preact'
import { useContext} from 'preact/hooks';

const Path = createContext(location.pathname);

function Route(props) {
  const path = useContext(Path);
  const isMatch = path.startsWith(props.path);
  const innerPath = path.substring(props.path.length);
  return isMatch && (
    <Path.Provider value={innerPath}>
      {props.children}
    </Path.Provider>
  )
}

export {Route};
