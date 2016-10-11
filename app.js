(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function() {
    this.products = gems;
  });

  app.controller('PanelController', function () {
    this.tab = 1;

    this.selectTab = function (setTab) {
      this.tab = setTab;
    }

    this.isSelected = function (checkTab) {
      return this.tab === checkTab;
    }
  });
  var gems = [
    {
      name: 'Decahedron',
      price: 30,
      description: 'Monicah is screwed up',
      canPurchase: true,
      soldOut: false,
      images: [
        {
          full: 'web.jpeg',
          thumb: 'web.jpeg'
        }
      ]
    },
    {
      name: 'Tetrahedron',
      price: 40.25,
      description: 'You don\'t wanna miss this',
      canPurchase: true,
      soldOut: false,
      images: [
        {
          full: 'web.jpeg',
          thumb: 'web.jpeg'
        }
      ]
    }
  ]

})();
