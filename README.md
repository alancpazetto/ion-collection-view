ion-collection-view
===================

Angular directive for Ionic Framework, to make a collection view like iOS collection view and Android grid view.

Dependencies
===================

> jQuery ~2.1.1 or later

Install
===================

1. Install from github or bower repository:
> bower install ionCollectionView [--save]

2. Include the script
```html
<script src="path/to/ionCollectionView.js"></script>
```

2. Include the css, if you like, the scss can be used
```html
<link href="path/to/ionCollectionView.css"></script>
```

3. Include the module in your project
```javascipt
angular.module('yourProject', ['ionCollectionView']);
```

Usage
===================

Use the tag ion-collection-view:
```html
<ion-collection-view row-items="2">
  <ion-item>A item!</ion-item>
</ion-collection-view>
```

row-items is the number of items in one row of the collection.

License
===================

Apache License 2.0

Authors
===================

Alan Pazetto <alancpazetto@gmail.com> or <alan@own.art.br> (http://own.art.br).

Thank you!
