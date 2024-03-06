import { propsType } from "../interfaces/name";

function ShowName(props: propsType) {
    return <h1>Hello Dat {props.name}</h1>;
}
export default ShowName;
