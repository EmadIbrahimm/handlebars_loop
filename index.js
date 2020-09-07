const express = require('express');
const exphbs = require('express-handlebars');
const port = process.env.PORT || 3000;
const app = express();

const students = ['Jean', 'Binta', 'Agathe', 'Adil'];
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
// app.use(express.static('public'));

app.get('/', (req, res)=>{
    // res.send('welcome to express simple form')
    res.render('home', {
        students: students
    });
    // res.render('home', {
    //     students : ['Jean', 'Binta', 'Agathe', 'Adil']
    // })
});

//1 récupérer contenue de l'input
//2 ajoute le contenue de l'input a tableau student
// 
app.post('/students/add', (req, res)=>{
    console.log(res)
    
})

app.listen(port, ()=>{
    console.log('welcome to express simple forms' + ' '+ port)
});