import { Injectable } from '@angular/core';

export interface TypewriterOptions {
  speed?: number;
  deleteSpeed?: number;
  loop?: boolean;
  delay?: number;
}

@Injectable({
  providedIn: 'root'
})
export class TypewriterService {

  async typewrite(
    element: HTMLElement,
    text: string,
    options: TypewriterOptions = {}
  ): Promise<void> {
    const {
      speed = 100,
      deleteSpeed = 50,
      loop = false,
      delay = 1000
    } = options;

    const type = async (txt: string) => {
      for (let i = 0; i <= txt.length; i++) {
        element.textContent = txt.substring(0, i);
        await this.wait(speed);
      }
    };

    const deleteText = async () => {
      const currentText = element.textContent || '';
      for (let i = currentText.length; i >= 0; i--) {
        element.textContent = currentText.substring(0, i);
        await this.wait(deleteSpeed);
      }
    };

    do {
      await type(text);
      await this.wait(delay);
      if (loop) {
        await deleteText();
        await this.wait(delay / 2);
      }
    } while (loop);
  }

  async typewriteMultiple(
    element: HTMLElement,
    texts: string[],
    options: TypewriterOptions = {}
  ): Promise<void> {
    const {
      speed = 100,
      deleteSpeed = 50,
      loop = true,
      delay = 1000
    } = options;

    const type = async (txt: string) => {
      for (let i = 0; i <= txt.length; i++) {
        element.textContent = txt.substring(0, i);
        await this.wait(speed);
      }
    };

    const deleteText = async () => {
      const currentText = element.textContent || '';
      for (let i = currentText.length; i >= 0; i--) {
        element.textContent = currentText.substring(0, i);
        await this.wait(deleteSpeed);
      }
    };

    let currentIndex = 0;
    do {
      await type(texts[currentIndex]);
      await this.wait(delay);

      if (loop || currentIndex < texts.length - 1) {
        await deleteText();
        await this.wait(delay / 2);
        currentIndex = (currentIndex + 1) % texts.length;
      }
    } while (loop || currentIndex !== 0);
  }

  private wait(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
