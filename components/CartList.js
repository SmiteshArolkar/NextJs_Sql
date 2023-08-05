import React, { useEffect, useState } from "react";

const CartList = () => {
  const [activeTab, setActiveTab] = useState("pending");
  const [filteredItems, setFilteredItems] = useState([]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    setFilteredItems([]);
    if (activeTab === "pending") {
      setFilteredItems(cartItems.filter((item) => item.status === "pending"));
    } else if (activeTab === "approved") {
      setFilteredItems(cartItems.filter((item) => item.status === "approved"));
    }
    else if (activeTab === "accepted") {
      setFilteredItems(cartItems.filter((item) => item.status === "accepted"));
    }

    return () => {};
  }, [activeTab]);

  const cartItems = [
    {
      id: 1,
      name: "Product 1",
      quantity: 3,
      status: "pending",
    },
    {
      id: 2,
      name: "Product 2",
      quantity: 1,
      status: "approved",
    },
    {
      id: 3,
      name: "Product 3",
      quantity: 3,
      status: "pending",
    },
    {
      id: 4,
      name: "Product 4",
      quantity: 1,
      status: "approved",
    },
    {
      id: 5,
      name: "Product 5",
      quantity: 3,
      status: "pending",
    },
    {
      id: 6,
      name: "Product 6",
      quantity: 1,
      status: "approved",
    },
    {
      id: 7,
      name: "Product 6",
      quantity: 1,
      status: "accepted",
    },
    // Add more items
  ];

  return (
    <div className="p-4">
      <div className="mb-4 flex">
        <button
          className={`mr-4 ${
            activeTab === "pending"
              ? "text-blue-300 font-bold "
              : "text-gray-500"
          }`}
          onClick={() => {
            setFilteredItems([]);
            handleTabChange("pending");
          }}
        >
          Pending Request
        </button>
        <div className="border-r border-gray-300 mr-3"></div>
        <button
          className={`mr-4 ${
            activeTab === "approved"
              ? "text-green-500 font-bold "
              : "text-gray-500"
          }`}
          onClick={() => {
            setFilteredItems([]);
            handleTabChange("approved");
          }}
        >
          Approved Request
        </button>
        <div className="border-r border-gray-300 mr-3"></div>
        <button
          className={`mr-4 ${
            activeTab === "accepted"
              ? "text-red-300 font-bold "
              : "text-gray-500"
          }`}
          onClick={() => {
            setFilteredItems([]);
            handleTabChange("accepted");
          }}
        >
          Accepted Requests
        </button>
      </div>
      <div className="border-t border-gray-300 mb-8"></div>

      <div className="grid grid-cols-1 gap-4 ">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-blue-200 border-2 rounded-lg shadow-xl p-4 grid grid-cols-2 cursor-pointer"
          >
            <div>
              <h3 className="text-gray-800 font-semibold">{item.name}</h3>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
              <p className="text-gray-600">Status: {item.status}</p>
            </div>
            <div className="grid hover:scale-125 duration-300">
              {item.status === "pending" ? (
                <div className="flex gap-2">
                  
                  <button className="border-2 px-2 w-1/4  my-4 mx-auto py-1 m-1 bg-red-300 rounded-lg shadow-lg">
                    Cancel Request
                  </button>
                </div>
              ) :
              item.status === "approved" ? 
              (
                <>
                  <div className="border-2 rounded-xl p-2 bg-yellow-200 shadow flex gap-2 justify-between">
                    Supplier Details
                    <div>
                      <input
                        placeholder="message"
                        type="text"
                        className="p-2 border-2 border-blue-300 rounded-lg  hover:scale-150 w-10/12 hover:-translate-x-12 duration-300"
                      ></input>
                      <button className="border-2 p-2 rounded-lg bg-green-500  text-white hover:bg-blue-400 duration-300 ">
                        Send message
                      </button>
                    </div>
                  </div>
                </>
              ):
              (
                <>
                  <div className="border-2 rounded-xl p-2 bg-yellow-200 shadow flex gap-2 justify-between">
                    User Details
                    <div>
                      <input
                        placeholder="message"
                        type="text"
                        className="p-2 border-2 border-blue-300 rounded-lg  hover:scale-150 w-10/12 hover:-translate-x-12 duration-300"
                      ></input>
                      <button className="border-2 p-2 rounded-lg bg-green-500  text-white hover:bg-blue-400 duration-300 ">
                        Send Message
                      </button>
                    </div>
                  </div>
                </>
              )
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartList;
