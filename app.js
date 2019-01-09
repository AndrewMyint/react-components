// TODO
// var List = (props) => (
//   <ul>
//     <li>{props.items[0]}</li>
//     <li>{props.items[1]}</li>
//   </ul>
// )




var Cucumber = (props) => (
  <li>{props.item}</li>
)

var Kale = (props) => (
  <li>{props.item}</li>
)

var GroceryList = () => (
  <div>
    <Cucumber item = "cucumber"/>
    <Kale item = "kale"/>
  </div>
);

ReactDOM.render(<GroceryList/>, document.getElementById("app"));