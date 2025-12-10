import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  private readonly MODE_KEY = 'theme-mode';

  constructor(){
    this.setupTheme()
  }


  setupTheme(){
    const current = this.getMode();

    if (!current){
      this.setLight();
      return;
    }

    if (current === "dark")
    {
      this.setDark();
    }else{
      this.setLight();
    }

  }

  isDark(): boolean {
    return document.documentElement.classList.contains('dark');
  }

  toggleDark(){
    const htmlTag = document.documentElement;
    if (this.isDark()){
      htmlTag.classList.remove('dark')
      this.saveMode('light');
    }else{
      htmlTag.classList.add('dark')
      this.saveMode('dark');
    }
  }

  setDark(){
    const htmlTag = document.documentElement;
    htmlTag.classList.add('dark')
    this.saveMode('dark');

  }

  setLight(){
    const htmlTag = document.documentElement;
    htmlTag.classList.remove('dark');
    this.saveMode('light');

  }

  private saveMode(mode: "light" | "dark"){
    localStorage.setItem(this.MODE_KEY, mode);
  }

  private getMode(): string {
    return localStorage.getItem(this.MODE_KEY) || "light";
  }
  
}
