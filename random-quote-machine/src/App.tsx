import { useState, useEffect } from "react";
import "./App.css";

interface QuoteResponse {
  quoteText: string;
  quoteAuthor: string;
  quoteLink: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<QuoteResponse | null>(null);

  const fetchData = () => {
    const script = document.createElement("script");
    const callbackName = `jsonpCallback_${Date.now()}`;

    (window as any)[callbackName] = (response: any) => {
      setData(response);
      console.log(response);
      document.body.removeChild(script);
      delete (window as any)[callbackName];
    };

    script.src = `https://api.forismatic.com/api/1.0/?method=getQuote&key=random&format=jsonp&lang=ru&jsonp=${callbackName}`;
    document.body.appendChild(script);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <span>{data?.quoteText}</span>
        <br />
        <span>{data?.quoteAuthor}</span>
        <br />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <a href={data?.quoteLink}>Подробнее</a>
          <button onClick={fetchData}>Следующая</button>
        </div>
      </div>
    </>
  );
};

export default App;
