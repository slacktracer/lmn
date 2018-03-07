import parse5 from 'parse5';

const parsedFragment = parse5.parseFragment(`
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out <i>How cool is it?</i></label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
`);

function parseAttributes(attrs) {
  return !attrs ? {} : attrs.reduce((result, attr) => {
    result[attr.name] = attr.value;
    return result;
  }, {});
}

function parseNodes(nodes) {
  return !nodes ? [] : nodes.map(node => node.nodeName !== '#text' ? [node.tagName, parseAttributes(node.attrs), parseNodes(node.childNodes)] : !node.value.startsWith('\\n') && node.value);
}

const y = parseNodes(parsedFragment.childNodes);

console.log(JSON.stringify(y, null, 2));
