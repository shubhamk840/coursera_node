var rect = require('./rectangle');

function solveRectangle(l,b)
{
    console.log("solving for the rectangle");
    rect(l,b,(err,rectangle)=>{
          if(err!=null)
          {
              console.log(err.message);
          }
          else
          {
              console.log(rectangle.perimeter() +" and "+ rectangle.area());
          }
    });
    console.log("this statment is after tha call to rec");
}

solveRectangle(1,5);