import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.css']
})
export class HeroBannerComponent {
  imageObject = [{
    image: 'https://www.monolithai.com/hs-fs/hubfs/Kautex_Textron_Logo_Bw-1.png?width=193&height=58&name=Kautex_Textron_Logo_Bw-1.png',
    thumbImage: 'https://www.monolithai.com/hs-fs/hubfs/Kautex_Textron_Logo_Bw-1.png?width=193&height=58&name=Kautex_Textron_Logo_Bw-1.png',
}, {
    image: 'https://www.monolithai.com/hs-fs/hubfs/michelin-tire-logo.png?width=193&height=57&name=michelin-tire-logo.png',
    thumbImage: 'https://www.monolithai.com/hs-fs/hubfs/michelin-tire-logo.png?width=193&height=57&name=michelin-tire-logo.png'
}, {
    image: 'https://www.monolithai.com/hs-fs/hubfs/honeywell-1-logo-black-and-white.png?width=193&height=36&name=honeywell-1-logo-black-and-white.png',
    thumbImage: 'https://www.monolithai.com/hs-fs/hubfs/honeywell-1-logo-black-and-white.png?width=193&height=36&name=honeywell-1-logo-black-and-white.png',
    // title: 'Example with title.'
},{
    image: 'https://www.monolithai.com/hs-fs/hubfs/mercedes-benz_logo.png',
    thumbImage: 'https://www.monolithai.com/hs-fs/hubfs/mercedes-benz_logo.png',
},
  {
    image: 'https://www.monolithai.com/hubfs/Aptar%20Logo.svg',
    thumbImage: 'https://www.monolithai.com/hubfs/Aptar%20Logo.svg'
  },
 {
    image: 'https://www.monolithai.com/hs-fs/hubfs/JOTA_logo.png',
    thumbImage: 'https://www.monolithai.com/hs-fs/hubfs/JOTA_logo.png'
}, {
    image: './assets/bmw-logo.webp',
    thumbImage: './assets/bmw-logo.webp',
    // title: 'Example two with title.'
}, {
    image: 'https://www.monolithai.com/hubfs/honda_logo.svg',
    thumbImage: 'https://www.monolithai.com/hubfs/honda_logo.svg'
}, {
    image: 'https://www.monolithai.com/hubfs/Siemens_logo.svg',
    thumbImage: 'https://www.monolithai.com/hubfs/Siemens_logo.svg'
}, {
    image: 'https://www.monolithai.com/hubfs/bae-systems_logo.svg',
    thumbImage: 'https://www.monolithai.com/hubfs/bae-systems_logo.svg'
}];
}
