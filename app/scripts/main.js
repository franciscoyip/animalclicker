

var cats = [
  {img: 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496',
  name: 'pepper'},
  {
    img: 'http://24.media.tumblr.com/tumblr_m3vxk5jAZH1r81frto1_500.jpg',
    name: 'meow'
  },
  {
    img: 'https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454',
    name: 'maymay'
  }
];

var mycatapp = new CatApp(cats, $('.wrapper'));
