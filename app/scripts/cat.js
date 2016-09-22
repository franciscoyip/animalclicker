var CatModel = function(cat){
    var clickcount = 0;

    var _self = this;

    //create elements
    var $namediv = $('<div>').addClass('name').html(cat.name);
    var $imagelink = $('<a>').attr({
      title: cat.name,
      href: '#'
    }).append( $('<img>').attr({
      src: cat.img,
      alt: cat.name
    }) );
    var $resultcount = $('<div>').html(clickcount).addClass('result-count');

    this.elements = {
      namediv: $namediv,
      imagelink: $imagelink,
      cntdiv: $resultcount
    }

    $imagelink.click(function(e){
      console.log('clicked');
      e.preventDefault()
      imageOnclick(clickcount);
    });

    function imageOnclick(){
      clickcount++;
      renderCount();
    }
    function renderCount(){
      _self.elements.cntdiv.html(clickcount);
    }

    return {
      elements: _self.elements,
      getCount: function(){
        return clickcount;
      }
    }
};

var CatApp = function(cats, $container){
    var cats = cats;
    var $leftpanel = $container.find('.leftnav .list');
    var $rightpanel = $container.find('.catarea .links');
    cats.forEach(function(cat){

      var $li = $('<li>');
      var $a = $('<a>').attr({
        title:cat.name,
        href:'#'
      }).html(cat.name);
      var catmodel = new CatModel(cat);
      $li.append($a);
      $leftpanel.append($li);

      $a.click(function(e){
        e.preventDefault();
        catSelected(catmodel);
      });

    });

    function catSelected(catmodel){
      $rightpanel.children().detach();
      $rightpanel
      .append(catmodel.elements.namediv)
      .append(catmodel.elements.imagelink)
      .append(catmodel.elements.cntdiv);
    }


};
