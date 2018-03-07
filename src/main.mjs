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
    : nodes.reduce((result, node) => {
        if (node.nodeName !== "#text") {
          const array = [node.tagName];
          node.attrs.length && array.push(parseAttributes(node.attrs));
          node.childNodes.length && array.push(parseNodes(node.childNodes));

          return result.concat([array]);
        }

        if (!node.value.startsWith("\n")) {
          return result.concat(node.value);
        }

        return result;
      }, []);
}

export default function(domString) {
  const parsedFragment = parse5.parseFragment(domString);
  return parseNodes(parsedFragment.childNodes);
}
