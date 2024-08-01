import express from "express"
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// function auth(){
//   return false
// }

app.get("/api/Khanyie/greet", function(req, res){
    res.json(
      { 
        name : req.query.name,
        language: req.query.language
      }
    );
    console.log(req.query)
  });

  app.post("/api/Khanyie/greet", function(req, res){
    res.json(
      { 
        name : req.body.name,
        language: req.body.language
      }
    );
    console.log(req.body)
  });
  
  let PORT = process.env.PORT || 3007;
  
  app.listen(PORT, function(){
    console.log('App starting on port:', PORT);
  });