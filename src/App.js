import Posts from "pages/Posts";
import Header from "components/Header/Header";
import Content from "components/Content/Content";

import "App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Content>
        <Posts />
      </Content>
    </div>
  );
}

export default App;
