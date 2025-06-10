import { Injectable } from '@angular/core';

export interface Product{
  id: number;
  nombre:string;
  descripcion: string;
  precio: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})

export class Products {
  
  private products:Product[] = [
    {
      id: 1,
      nombre: 'Vestido Pro Climacool para Tenis',
      descripcion : 'Un vestido de tenis ajustado con tecnología CLIMACOOL que te mantiene fresco, seco y listo para la acción.',
      precio: 4399,
      imagen: '/img/robe_rojo.jpg'
    },
    {
      id: 2,
      nombre: 'Tenis Courtjam Control 3 Prémium para Tenis',
      descripcion: 'Lúcete en las canchas duras con este calzado de tenis de piel con soporte.',
      precio: 2199,
      imagen: '/img/tenis_shoes.jpg'
    },
    {
      id: 3,
      nombre: 'Playera Sin Mangas Club Tennis Cuello en V',
      descripcion: 'Una playera sin mangas ajustada para jugar tenis con confianza, hecha parcialmente con materiales reciclados.',
      precio: 699,
      imagen: '/img/celeste.jpg'
    },
   {
      id: 4,
      nombre: 'Falda con Shorts Integrados Optime',
      descripcion: 'Una falda con shorts con tecnología CLIMACOOL para mantenerte fresca, seca y lista, hecha parcialmente con materiales reciclados.',
      precio: 899,
      imagen: '/img/verde.jpg'
   }
  ]
  constructor(){}
  getProducts():Product[]{
    return this.products;
  }
}
