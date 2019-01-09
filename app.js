// TODO
var List = (props) => (
  <ul>
    <li>{props.items[0]}</li>
    <li>{props.items[1]}</li>
  </ul>
)
var GroceryList = () => (
  <div>
    <List items={['cucumbers','kale']}/>
  </div>
);
ReactDOM.render(<GroceryList/>, document.getElementById("app"));

