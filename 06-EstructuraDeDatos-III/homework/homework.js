'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;
}
BinarySearchTree.prototype.insert = function(value){
   if ( value < this.value){
     if(this.left){
      return this.left.insert(value);
      
     }else {
      this.left = new BinarySearchTree(value);
      return value;
     }
      }else { 
      
        if(this.right){
         return this.right.insert(value);
      } else {
         this.right = new BinarySearchTree(value);
         return value;
      }
   

   }
};
BinarySearchTree.prototype.size = function(){
   var suma = 0;
   suma += 1;
  if(this.left) suma += this.left.size();
  if(this.right) suma += this.right.size();
  return suma;
};
BinarySearchTree.prototype.contains = function(value){
   if(this.value === value)return true;   // si yo lo tengo
   if(this.left && this.left.contains(value))return true;  //si lo tiene la izquierda
   if(this.right && this.right.contains(value))return true;  //si lo tiene la derecha
   return false;
   };
   BinarySearchTree.prototype.depthFirstForEach = function (cb,order){
      switch (order){
          case "post-order"://I , D , N
            this.left && this.left.depthFirstForEach(cb,order);
            this.right && this.right.depthFirstForEach(cb,order);
            cb(this.value);
         break;
         case "pre-order"://N , I , D
            cb(this.value);
            this.left && this.left.depthFirstForEach(cb,order);
            this.right && this.right.depthFirstForEach(cb,order);
            
            break;
            default:"in-order"// I , N , D
               this.left && this.left.depthFirstForEach(cb,order);
               cb(this.value);
               this.right && this.right.depthFirstForEach(cb,order);
               break;

      }
      
   };
    
   BinarySearchTree.prototype.breadthFirstForEach = function(cb, pendientes){
   if(!pendientes){
  var pendientes = [];
}
  cb(this.value);

  this.left && pendientes.push(this.left);
  this.right && pendientes.push(this.right);

  if (pendientes.length){
   pendientes.shift().breadthFirstForEach(cb, pendientes);
  } 
   };
   

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};

