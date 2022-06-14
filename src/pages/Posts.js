import Card from "components/Card/Card";
import { Button, Input, Textarea } from "components/Form";
import Employees from "components/Employees/Employees";

function Posts() {
  return (
    <>
      <Employees />
      <Card
        title="Shrimp and Chorizo Paella"
        intro="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
        content="Method: Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes...."
      />

      <Button label="Click me" bgColor="asbestos" />
      <Input
        bgColor="silver"
        color="amethyst"
        borderRadius="5px"
        borderColor="white"
        borderSize="1px"
      ></Input>
      <Textarea
        bgColor="silver"
        color="amethyst"
        borderRadius="5px"
        borderColor="white"
        borderSize="1px"
      ></Textarea>
    </>
  );
}
export default Posts;
