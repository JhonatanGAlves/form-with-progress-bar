import { Form } from "./components/Form/Form";
import { GlobalStyles } from "./styles/global";

export const App = () => {
  return (
    <div className="App">
      <GlobalStyles />

      <h3>Challenge @fernandev</h3>
      <h1>Form progress</h1>
      <Form />
    </div>
  );
};
