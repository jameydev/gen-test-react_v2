export default function Link(props) {
    return <a { ...props.config} target="_blank">{props.children}</a>;
}