const heading = React.createElement("h1", { id: "heading" }, "The first react App");
const root = ReactDOM.createRoot(document.getElementById("root"));

const div = React.createElement("h1", { id: "parent" },
            React.createElement("h1", { id: "child" }, 
            [React.createElement("h1", { id: "h1" }, "I am h1 tag"), 
            React.createElement("h2", { id: "h2" }, "I am h2 tag")]
            )
);

root.render(heading);
root.render(div);