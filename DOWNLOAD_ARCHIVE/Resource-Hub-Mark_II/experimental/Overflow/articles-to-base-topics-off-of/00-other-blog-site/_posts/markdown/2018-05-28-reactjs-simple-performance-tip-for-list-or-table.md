<!--


---
 'ReactJS : Simple performance tip for list or table'
excerpt: 'By using PureComponent or implementing shouldComponentUpdate in listItem or row component can save lot of rerenders'
date: 2018-05-28 23:55:00 IST
updated: 2017-05-28 23:55:00 IST
categories: react
tags: react, performance
image: https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2017/react-table-perf/react-optimised-table.gif
---

-->
<!DOCTYPE html>
<html>

<head>
  <title>basic-git-workflow</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">


  <link rel="stylesheet" href="./css/bootstrap.css">
  <link rel="stylesheet" href="./css/bootstrap.grid.css">
  <link rel="stylesheet" href="./css/bootstrap.min.css">
  <link rel="stylesheet" href="./css/bootstrap-reboot.min.css">
  <link rel="stylesheet" href="./css/bootstrap.css.map">
  <link rel="stylesheet" href="./css/blog-home.css">
  <link rel="stylesheet" href="./css/prism.css">
  <script async defer src="./css/prism.js"></script>
</head>

<body>

If you implement table or list of your own, this simple tip will gain some performance improvement and can save a lot of rerenders.

Consider we have a `Table` and `TableRow` component which we use to show large Tabular data which has checkboxes used by users to select the rows.

```jsx
// data source
const users = [
  {id: 1, name: 'A'},
  {id: 2, name: 'B'},
  {id: 3, name: 'C'},
  {id: 4, name: 'D'},
];

class Table extends React.Component {
  constructor() {
    super();

    this.state = {
      selected: {},
    }
  }

  handleSelect = (e) => {
    const selected = this.state.selected;
    selected[e.target.name] = e.target.checked;
    this.setState({ selected });
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th />
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) => {
              return (
                  <TableRow 
                    key={user.id} 
                    id={user.id} 
                    name={user.name}  
                    selected={this.state.selected[user.id]} 
                    handleSelect={this.handleSelect} 
                  />;
              );
            })
          }
        </tbody>
      </table>
    );
  }
}
```

And the `TableRow` component 

```jsx
const TableRow = ({ selected, id, name, handleSelect }) => {
  console.log(`render TableRow :: ${id} :: ${name}`);
  return (
    <tr>
      <td>
        <input 
          name={id} 
          type="checkbox" 
          checked={selected} 
          onChange={handleSelect} 
        />
      </td>
      <td>{id}</td>
      <td>{name}</td>
    </tr>
  );
}

TableRow.defaultProps = {
  selected: false
}
```

The `TableRow` component have a `console.log` which will log the `id` & `name` when ever the component renders. This will help us to know which all rows are getting rerendered. 

Now when the user select one of row, all the rows get rerendered in the above example. You can see `console.log` for all the items in the data source.

![react-before-optimised-table](https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2017/react-table-perf/react-before-optimised-table.gif)

You can see the live version in [jsbin](https://jsbin.com/zubihot/2/edit?console,output)

<a class="jsbin-embed" href="http://jsbin.com/zubihot/2/embed?console,output">JS Bin on jsbin.com</a><script src="https://static.jsbin.com/js/embed.min.js?4.1.4"></script>

In the above demo we have only 4 items and 3 columns, which didn't cause much performance degradation. Where as consider the above table with around 200 items and 50 columns?
A simple checkbox selection will trigger 200 rerenders for `TableRow` component.

### Using PureComponent

The simple and effective optimisation we can do here is convert the `TableRow` component to a `PureComponent`.

```jsx
class TableRow extends React.PureComponent {
  defaultProps = {
    selected: false
  }

  render() {
    const { selected, id, name, handleSelect } = this.props;
    console.log(`render TableRow :: ${id} :: ${name}`);
    return (
      <tr>
        <td>
          <input 
            name={id} 
            type="checkbox" 
            checked={selected} 
            onChange={handleSelect} 
          />
        </td>
        <td>{id}</td>
        <td>{name}</td>
      </tr>
    );
  }
}
```

Now lets try selecting one of the row and see the improvement.

![react-before-optimised-table](https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2017/react-table-perf/react-optimised-table.gif)

Now when we select a row, only that row rerenders. [PureComponent](https://reactjs.org/docs/react-api.html#reactpurecomponent) has implemented 
`shouldComponentUpdate` which does a **shallow compare** of props and do rerenders only if it differs.

You can see the live version in [jsbin](https://jsbin.com/zubihot/edit?console,output)

<a class="jsbin-embed" href="http://jsbin.com/zubihot/embed?console,output">JS Bin on jsbin.com</a><script src="https://static.jsbin.com/js/embed.min.js?4.1.4"></script>

In the demo, the using of `PureComponent` was possible because the props where `number` & `string`. If the props are `Array` or `Object` we won't be 
able to use `PureComponent` since the **shallow compare** of `PureComponent` might lead to false positives. 

In such cases we can implement write our own parent component which implements deep compare in `shouldComponentUpdate`. 

```js
class PerfComponent extends Component {
  shouldComponentUpdate(nextProps) {
    // implement/ use deep compare functionality
    if(!deepEqual) {
      return true;
    }
    return false;
  }
}

export default PerfComponent;
```

and inherit `TableRow` from `PerfComponent`.


```jsx
class TableRow extends PerfComponent {
  defaultProps = {
    selected: false
  }

  render() {
    const { selected, user, handleSelect } = this.props;
    console.log(`render TableRow :: ${user.id} :: ${user.name}`);
    return (
      <tr>
        <td>
          <input 
            name={user.id} 
            type="checkbox" 
            checked={selected} 
            onChange={handleSelect} 
          />
        </td>
        <td>{user.id}</td>
        <td>{user.name}</td>
      </tr>
    );
  }
}
```

Hope it helped.


    Versions of Language/packages used in this post.

    | Library/Language | Version |
    | ---------------- |---------|
    |      React       |  16.4.0 |
