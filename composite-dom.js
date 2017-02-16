var TextNode = (function () {
    function TextNode(text) {
        this.text = text;
    }
    TextNode.prototype.print = function () {
        console.log(this.text);
    };
    return TextNode;
}());
var DomElement = (function () {
    function DomElement(elemName, textContent) {
        this.elemName = elemName;
        this.elems = [];
        this.textContent = textContent;
    }
    DomElement.prototype.add = function (elem) {
        this.elems.push(elem);
    };
    DomElement.prototype.print = function () {
        console.log(this.elemName);
        if (this.textContent) {
            console.log(this.textContent);
        }
        for (var _i = 0, _a = this.elems; _i < _a.length; _i++) {
            var elem = _a[_i];
            elem.print();
        }
        console.log(this.elemName);
    };
    return DomElement;
}());
var div = new DomElement("div");
var html = new DomElement("html");
var para1 = new DomElement("p");
var para2 = new DomElement("p");
para1.add(new TextNode("Hi, I am a TextNode being printed!"));
para2.add(new TextNode("TextNode == leaf"));
div.add(para1);
div.add(para2);
html.add(div);
html.print();
