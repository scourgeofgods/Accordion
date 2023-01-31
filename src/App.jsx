import { useState } from "react";
import Questions from "./Questions";
import data from "./data";

function App() {
  const [questions, setQuestion] = useState(data);
  return (
    <div className="acc py-5">
      <div className=" vh-100 container ">
        <div className="row justify-content-center align-items-center ">
          <div className="col-md-6 p-2">
            <h1 className="text-uppercase text-center">
              frequently asked questions
            </h1>
          </div>
        </div>
        <div className="row  align-items-center justify-content-between rounded-3 p-2 ">
          <div className="col-lg-4 col-12 ">
            <h1 className="text-capitalize text-lg-start text-center">
              questions and answers about login
            </h1>
          </div>
          <div className="col-lg-8 col-12 p-5 ">
            {questions.map((question) => {
              return <Questions {...question} key={question.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
