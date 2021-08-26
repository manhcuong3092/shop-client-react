import productImg from "../img/700x400.png";

export default function CartItem(props) {
  return (
    <tr>
      <td>
        <img src={ productImg } style={{ width: '200px', height: '200px' }} />
      </td>
      <td class="mt-2">Tshirt</td>
      <td class="mt-2">XL</td>
      <td class="mt-2">Red</td>
      <td class="mt-2">55$</td>
      <td>
        <input type="number" className="form-control" value="3" />
      </td>
      <td class="mt-2">165$</td>
    </tr>
  )
}