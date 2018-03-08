import parse5 from "parse5";

const sorter = (a, b) => a.name > b.name;

const replacer = ([, match]) => match.toUpperCase();

function parseAttributes(attrs) {
  const sorted = [...attrs].sort(sorter);

  return sorted.reduce((result, attr) => {
    result[attr.name.replace(/(-\w)/g, replacer)] = attr.value;

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

export default function lmn(domString) {
  const parsedFragment = parse5.parseFragment(domString.trim());

  if (parsedFragment.childNodes.length > 1) {
    throw new Error("More than one element as root.");
  }

  const [parsedNodes] = parseNodes(parsedFragment.childNodes);

  return parsedNodes;
}
