class permitidos
{
    constructor( comida, descripcion, image){
  
        this._comida = comida; 
              this._descripcion = descripcion;
              this._image = image; 
    }
    
    get descripcion(){
        return this._descripcion;
    }
    set descripcion(descripcion){
        this._descripcion = descripcion;
    }
    get comida(){
        return this._comida;
    }
    set comida(comida){
        this._comida = comida;
    }
    get image() { 
        return this._image;
    }
    set image(image)
    {
        this._image = image; 
    }
}