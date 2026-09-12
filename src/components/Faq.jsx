// bootstrap
import { Container } from "react-bootstrap";

// components
import { faqItems } from "./Faqs";
import { useState } from "react";

export default function Faq() {
  const [openId, setOpenId] = useState(null);

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <Container id="faq" className="pt-5 pb-3 mt-5 mb-5">
      <h2 className="text-center mb-5 fw-bold display-6">Gyakori kérdések</h2>
      <div className="accordion">
        {faqItems.map((item) => (
          <div className="accordion-item" key={item.id}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${openId === item.id ? "" : "collapsed"}`}
                type="button"
                onClick={() => toggleItem(item.id)}
              >
                <strong>{item.question}</strong>
              </button>
            </h2>
            {openId === item.id && (
              <div className="accordion-collapse">
                <div className="accordion-body">{item.answer}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
}
