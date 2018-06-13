import parse5 from "parse5";

const isLineBreakAndZeroOrMoreSpaces = new RegExp("^\\n\\s*$", "g");

const isLineBreakWithText = new RegExp("(\\n\\s*)|([^\\s].+)", "g");

function parseAttributes(attrs) {
  const sorted = [...attrs].sort((a, b) => a.name > b.name);

  return sorted.reduce((result, attr) => {
    result[attr.name] = attr.value;

    return result;
  }, {});
}

function parseNodes(nodes) {
  if (nodes.length === 1) {
    const [node] = nodes;

    if (
      node.nodeName === "#text" &&
      !isLineBreakAndZeroOrMoreSpaces.test(node.value)
    ) {
      return node.value.replace(
        isLineBreakWithText,
        (matches, group1, group2) => {
          return group2 || "";
        }
      );
    }
  }

  return nodes.reduce((result, node) => {
    if (
      node.nodeName === "#text" &&
      isLineBreakAndZeroOrMoreSpaces.test(node.value)
    ) {
      return result;
    }

    if (node.nodeName !== "#text") {
      const array = [node.tagName];

      node.attrs.length && array.push(parseAttributes(node.attrs));
      node.childNodes.length && array.push(parseNodes(node.childNodes));

      return result.concat([array]);
    }

    if (!isLineBreakAndZeroOrMoreSpaces.test(node.value)) {
      return result.concat(node.value);
    }

    return result;
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
