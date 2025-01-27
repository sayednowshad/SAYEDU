import React, { useState } from 'react';

const faqs = [ 
  {
    question: '1. How is ist useful for us?',
    answer: 'React is a JavaScript library for building user interfaces.',
  }, 
  {
    question: '2. Is that all the resources are free to use?',
    answer: 'JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript.',
  },
  {
    question: '3. Is there any Download option for this?',
    answer: 'Components are reusable pieces of UI in React.',
  }, 
  {
    question: '4. What if the Links will expire sometime?',
    answer: 'State is a built-in object that stores dynamic data for a component.',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ padding: '16px', maxWidth: '768px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginBottom: '24px' }}>Frequently Asked Questions</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{ border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>

            <button
              onClick={() => toggleFAQ(index)}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                padding: '1.3rem',
                backgroundColor: 'white',
                border: 'none',
                cursor: 'pointer',
                outline: 'none',
                fontSize: '16px',
                color: '#333',
                fontWeight : 'bold'
              }}>
              <span>{faq.question}</span>
              <span>{activeIndex === index ? '▲' : '▼'}</span>
            </button>
            {activeIndex === index && (
              <div style={{ padding: '1.4rem', backgroundColor: "#FFFF", color: '#666', fontSize : '1.1rem', fontFamily : 'cursive', fontWeight : 'bolder' }}>
                {faq.answer}
              </div>
              
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 