import Button from "./components/Button";
import Form from "./components/Form";
import Input from "./components/Input";

function App() {
  const handleSave = (data: unknown) => {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
  };
  return (
    <main>
      <Form onSave={handleSave}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
        <Button>Save</Button>
      </Form>
    </main>
  );
}

export default App;
