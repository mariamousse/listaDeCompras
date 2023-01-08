var inputAdd, buttonAdd;
var inputCompleted, nameCompleted;
var itens = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  inputAdd = createInput("").attribute("placeholder", "O que deseja adicionar?")
  inputCompleted = createInput("", "checkbox");
  nameCompleted = createElement("h2");
  buttonAdd = createButton("");

  inputAdd.position(20,20);
  inputCompleted.position(20,100);
  nameCompleted.position(inputCompleted.x + 55, inputCompleted.y - 5);
  buttonAdd.position(240,20);

  inputAdd.class("inputAdd");
  inputCompleted.class("inputCompleted");
  nameCompleted.class("name")
  buttonAdd.class("buttonAdd");

  nameCompleted.html("Lista completa");

  itens.push(inputCompleted);

}

function draw() {
  background(20,20,20);  
  drawSprites();

  
  buttonAdd.mousePressed(() =>{
    adicionar_item();
  })


  
}

function adicionar_item(){
  var item = createInput("","checkbox");
  var nameItem = createElement("h2");

  item.position(itens[itens.length - 1].x, itens[itens.length - 1].y + 60);
  nameItem.position(item.x + 35, item.y - 15)

  item.class("item");
  nameItem.class("name");
  
  itens.push(item);

  nameItem.html(inputAdd.value());

  console.log(itens[itens.length - 1].y);
  //itens.add(item);

  windowResized();
}

function windowResized() {
  resizeCanvas(windowWidth, itens[itens.length - 1].y + windowHeight);
}