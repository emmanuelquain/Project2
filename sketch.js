var NUW

let font1
let font2
let font3

let sketchArray = []
let sketchIndex = 0;

let nameinfoArray = [
  "Name comes from the genus cynodont.",
  
  "Name comes from the words snow + golem.",
  
  "Name comes from the words terracotta + territorial.",
  
  "Name comes from the words pyre + raptor.",  
  
  "Name comes from the sound moo + the word gloom.",
  
  "Name comes from the words heart + marshmallow.",
  
  "Name comes from the words plasma + chameleon.",
  
  "Name comes from the corruption of the word hungry.",
  
  "Name comes from the words fume + spume.",
  
  "Name comes from the words sock + poppit.",

  "Name comes from the words tar + gargoyle.",
  
  "Name comes from the corruption of the word cherub.",
  
  "Name comes from the words victory + the japanese word for bird tori.",
  
  "Name comes from the words branch + antler.",
  
  "Name comes from the words rattle + husk.",
  
  "Name comes from the words pumpkin + king.",
  
];
let nameinfoIndex = 0;

let loreArray = [
  "A common species that can found all over the world. These creature are quite resilant and can adapt to any environment.",
  ///
  
  "Artic creatures that are found in the coldest of environment, they live a nomadic life roaming from place to place. It is unknown where they get their hats from.",
  ///

  "An agressive species found in desert areas. They cover themselves in clay, over time this clay hardens into pottery.",
  ///  
  
  "A species found near volcanoes, this species radiate a immense amount of heat. When aggroed these creatures stand on there hind limbs to look more intimidating.",
  ///  
  
  "A species found in open grasslands, they spend a majority of their time doing absolutely nothing. When inactive for long periods of time, the gas in their bodies begin to build up, causing them to have very rotund bodies.",
  ///
  
  "A species found near bakeries, they seem attracted to places with high concentrations of candy and sweets. These creatures are always found with heart shaped candy embed into their; however, it doesn't seem to cause them any discomfort. ",
  /// 
  
  "A strange species rarely found on earth, these alien like creature generate small amounts of electricty. When aggroed these creatures are seen gathering energy into the hole of their cone shaped heads to fire beams. ",
  ///
  
  "A species found in near occupied homes, they are a ghostly species that seem to have a quite ravenous hunger. Though they are seen constantly eating, due to their biology, never seem to feel full.",
  ///  
  
  "A aquatic species found in the ocean, they are a leading cause for oil spills near shores. Because of biology, the constantly are leaking oil where ever they go.",
  /// 
  
  "A species found in abandoned homes, they live a very secluded lifestyle. While it was originaly thought these creature where made of fabric, studies have reveald that the fabric is not skin but rather a self crafted clothing to cover their real bodies.",
  ///
  
  "A aggressive species found in tombs and caves, they spit boiling tar from their mouth. While they do have wings, they are unable to fly in any shape or form.",
  ///
  
  "A strange species found exclusively in space, they are seen operating like living satellites. People have theorized that these creatures are actually from a completly diffrent dimension, but no definitive proof has been found.",

  
  "A species found near mountinous regions of the world, their feather glow a bright gold color. My cultures around the world has seen them as a symbol of trumpth and oppertunity. ",

  
  "A species found in forest, they in seen in herd picking various berries and holding them using their antlers. While normally docile, these creatures can become easiliy aggroed.",

  "A species found only during rainy days, not much is known about them. They spend a majority of their time flying around and rattling their bones.",

  "A species that is only seen during halloween, they are seen commanding small versions of themselves. Their diet manly concist of rotten plants and halloween candy.",
]
let loreIndex = 0;

let nameArray = ["CYNODON","SNOWLEM","TERRA TORA", "PYRAPTOR", "MOOGLOOM","HEARTMALLOW","PLASMELEON", "HUNGARR", "FUMESPUME","SOCKIT","TARGOYLE", "KHERU-B", "VICTORI","BRANTLER","RATTLUSK","PUMPKING",
                ]
let nameIndex = 0;



//Loads the main map, character renders, statues, gameover image, and music 
function preload() {
  //loads fonts
  font = loadFont('./assets/Anton-Regular.ttf');
  font2 = loadFont('./assets/BebasNeue-Regular.ttf');
  font3 = loadFont('./assets/Oswald-VariableFont_wght.ttf');
  

  sketchArray[0] = loadImage("./drawings/Monsta-0.png");
  sketchArray[1] = loadImage("./drawings/Monsta-1.png");
  sketchArray[2] = loadImage("./drawings/Monsta-2.png");
  sketchArray[3] = loadImage("./drawings/Monsta-3.png");
  sketchArray[4] = loadImage("./drawings/Monsta-4.png");
  sketchArray[5] = loadImage("./drawings/Monsta-5.png");
  sketchArray[6] = loadImage("./drawings/Monsta-6.png");
  sketchArray[7] = loadImage("./drawings/Monsta-7.png");
  sketchArray[8] = loadImage("./drawings/Monsta-8.png");
  sketchArray[9] = loadImage("./drawings/Monsta-9.jpg");
  sketchArray[10] = loadImage("./drawings/Monsta-10.png");
  sketchArray[11] = loadImage("./drawings/Monsta-11.png");
  sketchArray[12] = loadImage("./drawings/Monsta-12.png");
  sketchArray[13] = loadImage("./drawings/Monsta-13.png");
  sketchArray[14] = loadImage("./drawings/Monsta-14.png");
  sketchArray[15] = loadImage("./drawings/Monsta-15.png");
 
  
  
}

//creates the buttons  
function setup() {
  rectMode(CENTER);
  var canvas = createCanvas(900, 650);
  canvas.parent("sketch-holder");

  var button = createButton("<<-");
  button.parent("button-holder");
  button.mousePressed(ChangeCharacter);
  
  var button2 = createButton("->>");
  button2.parent("button-holder");
  button2.mousePressed(GoBack);  
  NUW = color( random(255), random(255), random(255)); 
}

function draw() {
  background(NUW);
  
  push();
  fill('black');
  noStroke();
  rect(100,10,1750,100);
  pop();
  
  //writes the name of the creature
  push();
  fill('white');
  textSize(50)
  textFont(font3);
  textStyle(BOLD);
  textAlign(CENTER)
  text(nameArray[nameIndex], width*0.5, 50,);
  pop();
  
  
  ///places images of creatures
  push();
  image(sketchArray[sketchIndex], width/4,60,450,450);
  pop();
  
  push();
  fill('black');
  noStroke();
  rect(100,586,1750,150)
  pop();
  
  //writes the name origin of the creature
  push();
  textAlign(CENTER);  
  textSize(16);
  fill('white');
  textFont(font3);
  text(nameinfoArray[nameinfoIndex],450,535,600);
  pop();
  
  //writes the lore of the creature
  push();
  fill('white');
  textAlign(LEFT, CENTER); 
  textSize(16);
  textFont(font3);
  text(loreArray[loreIndex], width/2, height*0.89,370);
  pop();  
  
}


//This allows for user to scroll forward through the images and text 
function ChangeCharacter(){
  //when pressed changes the images on screen to the next in list 
  sketchIndex++;
  if(sketchIndex > sketchArray.length-1) {
    sketchIndex = 0;
  }  
  ///when pressed changes the text on screen to the next in list
  nameIndex++;
  if(nameIndex > nameArray.length-1) {
    nameIndex = 0;
  }  
  
  nameinfoIndex++;
  if(nameinfoIndex > nameinfoArray.length-1) {
    nameinfoIndex = 0;
  }     
  
  loreIndex++;
  if(loreIndex > loreArray.length-1) {
    loreIndex = 0;  
}
}

// This allows for user to scroll back through the images and text 
function GoBack(){
  //when pressed changes the images on screen 
  sketchIndex--;
  if(sketchIndex > sketchArray.length+1) {
    sketchIndex = 0;
  }  if (sketchIndex === -1) {
  sketchIndex++;
  }

  ///when pressed changes the text on screen 
  nameIndex--;
  if(nameIndex > nameArray.length+1) {
    nameIndex = 0;
  }  if (nameIndex === -1) {
  nameIndex++;
  }
  
  nameinfoIndex--;
  if(nameinfoIndex > nameinfoArray.length+1) {
    nameinfoIndex = 0;
  }  if (nameinfoIndex === -1) {
  nameinfoIndex++;
  }
  
  loreIndex--;
  if(loreIndex > loreArray.length+1) {
    loreIndex = 0;  
  }  if (loreIndex === -1) {
  loreIndex++;
  }
}
      
function mousePressed(){
  NUW = color(random(255),random(255),random(255));  
}
      
      
      

