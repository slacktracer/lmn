import parse5 from "parse5";

function parseAttributes(attrs) {
  return !attrs
    ? {}
    : attrs.reduce((result, attr) => {
        result[attr.name] = attr.value;
        return result;
      }, {});
}

function parseNodes(nodes) {
  return !nodes
    ? []
    : nodes.map(
        node =>
          node.nodeName !== "#text"
            ? [
                node.tagName,
                parseAttributes(node.attrs),
                parseNodes(node.childNodes)
              ]
            : !node.value.startsWith("\\n") && node.value
      );
}

export default function(domString) {
  const parsedFragment = parse5.parseFragment(domString);
  return parseNodes(parsedFragment.childNodes);
}
