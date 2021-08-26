export default function Filter(props) {
  const { horizontal, filter, items } = props;
  return (
    <div className={"text-capitalize list-group " + (horizontal ? "list-group-horizontal" : "")} >
      { items.map((item) => <a href="#" className="list-group-item">{ item }</a>) }
    </div>
  )
}