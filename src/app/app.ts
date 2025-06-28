import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './header/header';
import {Links} from './links/links';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Links],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'socials';
}
