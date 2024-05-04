import { useState, useEffect } from "react";

function DocsTab() {
  const API = "data.json";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchBasicDocs = async () => {
      try {
        const response = await fetch(API);
        const responseData = await response.json();
        setData(responseData.basic_syntax);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBasicDocs();
  }, []);

  return (
    <div className="docs-tab">
      {data &&
        data.map((docs) => (
          <div key={docs.name}>
            <h2 className="docs-name">{docs.name}</h2>
            <p className="docs-desc">{docs.description}</p>
            {docs.examples.map((example, index) => (
              <div key={index} className="example-container">
                <h3>Example {index + 1}</h3>
                <h4>- Markdown:</h4>
                <code>{example.markdown}</code>
                <h4>- HTML:</h4>
                <code>{example.html}</code>
              </div>
            ))}
            {docs.additional_examples.map((add_examples) => (
              <div key={add_examples.name} className="example-container">
                <h3>{add_examples.name}</h3>
                <p>{add_examples.description}</p>
                <h4>- Markdown:</h4>
                <code>{add_examples.markdown}</code>
                <h4>- HTML:</h4>
                <code>{add_examples.html}</code>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}

export default DocsTab;
