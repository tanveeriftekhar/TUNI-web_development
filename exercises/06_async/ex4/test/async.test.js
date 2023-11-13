
var expect = require('chai').expect;
const { assert } = require('chai');
const draw = require('../../misc/draw');
const async = require('../callback');
const DOMParser = require('dom-parser');
const fs = require('fs');
const path = require('path');

describe('implementation with callbacks', function(){

  let code;
  const filename = "callback.js";
  before(function () {
    const tmp = fs.readFileSync(path.resolve('.', filename)).toString('utf8');
    try{
      code = babel.transform(js,{
        filename: filename//you need this filename for some reason, even if jibberish
    }).code;
      }catch{
        code = tmp;
    }
  });

  it('must not contain async', ()=>{
    assert(
      !(code.includes("async")),
      `${code} must not include async`);
    }
  );

  it('must not contain await', ()=>{
    assert(
      !(code.includes("await")),
      `${code} must not include await`);
    }
  );

it('must not contain Promise', ()=>{
    assert(
      !(code.includes("Promise")),
      `${code} must not include Promise`);
    }
  );
});


describe('drawArrows()', function () {
  let canvas = {};
  const parser = new DOMParser();
  const actors = ["hello", "world"];
  const timeout = 500;


  beforeEach(async()=> {
    // avoid object references and create copies
    await wait(4 * timeout);
    canvas = draw.getCanvasInNode();
    draw.setCanvas(canvas);
    
  });

  it('must return one line', async () => {

    // const timeout = 1000;
    async.drawArrows(actors, timeout, draw.drawArrow, 0);

    await wait(0.7 * timeout);

    const svg = canvas.svg();
    const xmlDoc = parser.parseFromString(svg, "text/xml");
    const lines = xmlDoc.getElementsByTagName("line");
    const len = lines.length;
    expect(len).to.equal(1);
  });

  it('must return a specific number of lines', async () => {
    // const timeout = 1000;
    async.drawArrows(actors, timeout, draw.drawArrow, 0);
    await wait(1.5 * timeout);

    const svg = canvas.svg();
    const xmlDoc = parser.parseFromString(svg, "text/xml");
    const lines = xmlDoc.getElementsByTagName("line");
    // console.log(svg);
    const len = lines.length;
    expect(len).to.equal(2);
  });


  it('must return N=(actors2.length) lines', async () => {

    const timeout2 = 1000;
    const actors2 = ["mobile client", "router", "controller", "model", "mongoDB"]
    async.drawArrows(actors2, timeout2, draw.drawArrow);

    await wait((actors2.length-1) * timeout2 );

    const svg = canvas.svg();
    // console.log(svg);
    
    const xmlDoc = parser.parseFromString(svg, "text/xml");
    const lines = xmlDoc.getElementsByTagName("line");
    const len = lines.length;

    expect(len).to.equal(actors2.length -1);
  });
});



const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

