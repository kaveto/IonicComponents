import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home-c',
  templateUrl: './home-c.component.html',
  styleUrls: ['./home-c.component.scss'],
})
export class HomeCComponent implements OnInit {

  paletteToggle = false;
  constructor(private router: Router, public navCtrl: NavController) { }

  ngOnInit() { }
  // Check/uncheck the toggle and update the palette based on isDark
  initializeDarkPalette(isDark?: any) {
    this.paletteToggle = isDark;
    this.toggleDarkPalette(isDark);
  }

  // Listen for the toggle check/uncheck to toggle the dark palette
  toggleChange(ev?: any) {
    this.toggleDarkPalette(ev.detail.checked);
  }

  // Add or remove the "ion-palette-dark" class on the html element
  toggleDarkPalette(shouldAdd?: any) {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
  }

}
