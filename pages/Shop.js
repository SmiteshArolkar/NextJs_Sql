import React, { useState } from 'react';

const AccordionList = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const accordionItems = [
    {
      id: 1,
      title: ' Item 1',
      content: 'Content for  Item 1.',
    },
    {
      id: 2,
      title: 'Item 2',
      content: 'Content for  Item 2.',
    },
    // Add more accordion items
  ];

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="p-4 w-3/4 mx-auto">
        <div className='text-center my-10 '>
        <h1 className="text-3xl font-bold mb-4">OPEN REQUEST</h1>
        </div>
     
      <div className="space-y-8 bg-white p-4 rounded-lg shadow-xl text-slate-200">
        {accordionItems.map((item, index) => (
          <div key={item.id} className="border-2 p-2 border-yellow-300 bg-blue-400 hover:scale-110 duration-500  rounded-xl">
            <button
              className="w-full text-left p-3"
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-semibold">{item.title}</span>
              <span className="float-right">
                {activeIndex === index ? '-' : '+'}
              </span>
            </button>
            {activeIndex === index && (
              <div className="p-3 grid grid-cols-2">
                <div>
                {item.content}
                </div>

                <div className='text-center bg-green-500 border rounded-lg w-full hover:bg-blue-300 mx-auto py-4'>
                    <button className='text-center'>Accept Request</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccordionList;
