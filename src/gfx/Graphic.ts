import {fabric} from 'fabric';
import {Bufferable} from './Bufferable';
import dataUriToBuffer from 'data-uri-to-buffer';

export abstract class Graphic implements Bufferable {
  private canvas: fabric.StaticCanvas;

  constructor(canvasOpts?: fabric.ICanvasOptions) {
    this.canvas = new fabric.StaticCanvas(null, canvasOpts);
  }

  public toBuffer() {
    const uri = this.canvas.toDataURL({ format: 'png' });
    return dataUriToBuffer(uri);
  }
}
