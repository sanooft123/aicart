import axios from "axios";
import { useState } from "react";

export default function Order() {
  const [state, setState] = useState();
  const [order, setOrder] = useState();
  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }
  function onSubmit() {
    axios.get(`/api/order?orderId=${state.orderId}`).then((res) => {
      console.log(">>>", res.data);
      setOrder(res.data.order);
    });
  }
  return (
    <div>
      <div className="h-screen bg-black gap-4">
        <div className="text-white flex items-center justify-center">
          Orders
        </div>
        <div className="grid place-items-center gap-4 border border-white border-rounded-md p-10">
          <input
            name="orderId"
            placeholder="enter the order id"
            onChange={handleChange}
          ></input>
          <button
            className="bg-blue-600 border-rounded-md text-white hover:curser-pointer"
            onClick={() => onSubmit()}
          >
            Submit
          </button>
        </div>
        {order && (
          <>
            <div>
              <div className="text-white">Id : {order.orderId}</div>
              <div className="text-white">Items: </div>
              {order.items.map((item, index) => {
                return (
                  <div className="text-white grid" key={index}>
                    {item}
                  </div>
                );
              })}
            </div>
            <div className="text-white flex">
              Total :{" "}
              <div className="text-red-800 font-bold">{order.totalPrice}</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
