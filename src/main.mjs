import parse5 from "parse5";

// https://coderwall.com/p/iprsng/convert-snake-case-to-camelcase
function snakeToCamel(s) {
  return s.replace(/(-\w)/g, function(m) {
    return m[1].toUpperCase();
  });
}

function parseAttributes(attrs) {
  return attrs.reduce((result, attr) => {
    result[snakeToCamel(attr.name)] = attr.value;
    return result;
  }, {});
}

function parseNodes(nodes) {
  if (nodes.length === 1) {
    const [node] = nodes;
    if (node.nodeName === "#text" && !node.value.startsWith("\n")) {
      return node.value;
    }
  }

  return nodes.reduce((result, node) => {
    if (node.nodeName === "#text" && node.value.startsWith("\n")) {
      return result;
    }

    if (node.nodeName !== "#text") {
      const array = [node.tagName];

      node.attrs.length && array.push(parseAttributes(node.attrs));
      node.childNodes.length && array.push(parseNodes(node.childNodes));

      return result.concat([array]);
    }

    return result.concat(node.value);
  }, []);
}

export default function(domString) {
  const parsedFragment = parse5.parseFragment(domString.trim());

  if (parsedFragment.childNodes.length > 1) {
    throw new Error("More than one element as root.");
  }

  const [parsedNodes] = parseNodes(parsedFragment.childNodes);

  return parsedNodes;
}
