export default class Hat{
    name = '';
    size = '';
    color = '';
    material = '';
    floats = false;

    constructor(props) {
        this.name = props.name ?? '';
        this.size = props.size ?? '';
        this.material = props.material ?? '';
        this.color = props.color ?? '';
        this.floats = props.floats ?? false;
    }
}