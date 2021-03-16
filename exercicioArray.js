//  ----------- AULA 30 - Arrays (Básico) ------------ // 

// Estudar sobre vetores e matrizes 
// Os arrays pode ser imagino como uma 'lista' de coisas

const alunos = ['João', 'Maria', 'Fernanda', 'Georgia'];
console.log(typeof alunos); // tipo de alunos = object 


alunos[0] = 'Eduardo';      // Trocando o elemento do índice 0 
console.log(alunos)

alunos.push ('Luisa');      // adicionando um elemento
console.log(alunos)

const x = alunos.length;    // tamanho do vetor
console.log(x)

alunos.unshift('Laura'); // adicionando no começo do array
console.log(alunos)

const removePrimeiro = alunos.shift();   // Elimina o primeiro elemento
console.log(removePrimeiro);
console.log(alunos)

const removeUltimo = alunos.pop();   // Elimina o primeiro elemento
console.log(removeUltimo);
console.log(alunos);

console.log(alunos.slice(0, 3));     // fatiar o vetor

