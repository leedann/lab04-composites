interface IDomElement {
  print();
}

class TextNode implements IDomElement {
  private text:string;

  constructor(text:string) {
    this.text = text;
  }

  print() {
    console.log(this.text);
  }
}

class DomElement implements IDomElement {
  elemName:string;
  textContent:string;
  elems: IDomElement[];

  constructor(elemName:string, textContent?: string) {
    this.elemName = elemName;
    this.elems = [];
    this.textContent = textContent;
  }

  add(elem: IDomElement) {
    this.elems.push(elem);
  }
  print() {
    console.log(this.elemName);
    if (this.textContent) {
      console.log(this.textContent);
    }
    for (let elem of this.elems) {
      elem.print();
    }
    console.log(this.elemName);
  }
}

let div = new DomElement("div");
let html = new DomElement("html");
let para1 = new DomElement("p");
let para2 = new DomElement("p");


para1.add(new TextNode("Hi, I am a TextNode being printed!"));
para2.add(new TextNode("TextNode == leaf"));

div.add(para1);
div.add(para2);
html.add(div);

html.print();