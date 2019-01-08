// TODO
var GroceryList = (props) => (
  <div>
    <li>{props.item1}</li>
    <li>{props.item2}</li>
  </div>
);
ReactDOM.render(<GroceryList item1 = "item1" item2 = "item2"/>, document.getElementById("app"));
