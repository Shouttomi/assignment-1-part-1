import "./index.css";

import Lightbluesection from "./section-one/Lightbluesection";
import Darkbluesection from "./Darkbluesection";

const App = () => {
  return (
    <div className="content">
      <main className="totalsize">
        <div className="blue">
          <Darkbluesection />
          <Lightbluesection />
        </div>
      </main>
    </div>
  );
};
export default App;
