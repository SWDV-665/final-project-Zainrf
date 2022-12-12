import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  items = [ 
    {
      name: "Ryzen 9 5900x",
      brand: "AMD"
    },
    {
      name: "Core i5-12600K Processor",
      brand: "Intel"
    },
    {
      name: "Core i9-11900 Processor",
      brand: "Intel "
    },
    {
      name: "Ryzen 9 3950X",
      brand: "AMD"
    },{
      name: "RAM DDR5-4800 (2 x 16GB)",
      brand: "Samsung "
    },
    {
      name: " RAM T-Force Xtreem ARGB DDR4-3600 (2 x 8GB)",
      brand: "Team Force"
    },
    {
      name: "Motherboard Z690 Aorus Pro",
      brand: "Gigabyte"
    },
    {
      name: "Motherboard ROG Strix B660-I Gaming WIFI",
      brand: "Asus"
    },
    {
      name: "Motherboard ROG Strix B550-F Gaming Wi-Fi",
      brand: "Asus"
    },
    {
      name: "GeForce RTX 3050",
      brand: "Nvidia"
    },
    {
      name: "GeForce RTX 3090",
      brand: "Nvidia"
    },
    {
      name: "Radeon RX 6950 XT",
      brand: "AMD"
    },
    {
      name: "Radeon RX 6700 XT",
      brand: "AMD"
    }
  ];

  constructor(private http: HttpClientModule) {
    console.log('Hello')
   }

  getItems(){
    return this.items;
  }
  removeItem(index){
    this.items.splice(index, 1);
  }
  addItem(item){
    this.items.push(item);
  }
  editItem(item, index){
    this.items[index] = item;
  }
}
