import { Pipe } from '@angular/core';

@Pipe({
  name: 'categoryList'
})

export class categoryListPipe {
  transform(mediaItems) {

    var categories = [];
    mediaItems.forEach(mediaItem => {
      if (categories.indexOf(mediaItem.category) <= -1) {
        categories.push(mediaItem.category);
      }
    });
    return categories.join(', ');
        
  }
}
