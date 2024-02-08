var preguntas = ['Cual es tu nombre?',
                 'Cuantos años tienes?',
                 'Cual es tu lenguaje de programacion favorito?'];

var respuestas = [ ];

function pregunta(i){
     process.stdout.write(preguntas[i]);
}

process.stdin.on('data', function(data){
   respuestas.push(data.toString().trim());
    if(respuestas.length < preguntas.length){
        pregunta(respuestas.length);
    }else{
     process.exit();
}
});

process.on('exit', function() {
    process.stdout.write(`Tu nombre es ${respuestas[0]} tiene ${respuestas[1]} años y tu lenguaje de programacion favorito es  ${respuestas[2]}` ); 
})
pregunta(0); 