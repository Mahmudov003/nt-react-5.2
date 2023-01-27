import Nav from "./lyoud/nav";
import Header from "./lyoud/header";

const feedbacks = [
  {
    title: "Add tags for solutions ",
    votes: 123,
    description: "Search for solutions based on a specific stack",
    tags: ["Enhancement"],
  },
  {
    title: "Qy tags for solutions ",
    votes: 123,
    description: "Search for solutions based on a specific stack",
    tags: ["Enhancement"],
  },
  {
    title: " tags for solutions ",
    votes: 133,
    description: "Search for solutions based on a specific stack",
    tags: ["Enhancement"],
  },
  {
    title: "Add tags for solutions ",
    votes: 323,
    description: "Search for solutions based on a specific stack",
    tags: ["Enhancement"],
  },
  {
    title: "Add tags for solutions ",
    votes: 623,
    description: "Search for solutions based on a specific stack",
    tags: ["Enhancement"],
  },
];

function App(props) {
  return (
    <div className="App">
      <Nav />
      {/*  */}
      <Header feedbacks={feedbacks}/>
    </div>
  );
}

export default App;
