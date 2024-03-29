// TODO
// var GroceryList = (props) => (
  //   <div>
  //     <li>{props.item1}</li>
  //     <li>{props.item2}</li>
  //   </div>
  // );
  // // var item1 = 'banana';
  // // var item2 = 'apple';
  // ReactDOM.render(<GroceryList item1 = {'banana'} item2 = {'apple'}/>, document.getElementById("app"));



// var Cucumber = (props) => (
//   <li>{props.item}</li>
// )

// var Kale = (props) => (
//   <li>{props.item}</li>
// )

// var GroceryListItem = (props) => (
//   <ul>
//     <li>{props.groceryItems[0]}</li>
//     <li>{props.groceryItems[1]}</li>
//   </ul>
// )

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul>
        <li>{this.props.groceryItems[0]}</li>
        <li>{this.props.groceryItems[1]}</li>
      </ul>
    );
  }
}

var GroceryList = () => (
  <div>
    <GroceryListItem groceryItems={['bananas', 'apples']}/>
  </div>
);

ReactDOM.render(<GroceryList/>, document.getElementById("app"));

