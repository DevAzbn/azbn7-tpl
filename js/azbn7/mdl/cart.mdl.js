!function(t){t.Azbn7&&(t.Azbn7.load("Cart",new function(){var l=this;return l.name="cart",l.uid="azbn7__mdl__cart",l.data={cart:{},calculation:{sum:0,discount:0,to_pay:0,ids:0,variants:0},profile:{}},l.add=function(a,t,c,n,r){c=parseFloat(c)||1,n=parseFloat(n)||0,r=parseFloat(r)||0;var i=l.getItem(a,t);i?(i.qty=0+parseFloat(i.qty)+parseFloat(c),i.price=parseFloat(n)):i=l.createItem(a,t,c,n,r),l.setItem(i)},l.remove=function(a,t,c){c=parseFloat(c)||1;var n=l.getItem(a,t);n&&(n.qty=0+parseFloat(n.qty)-parseFloat(c),0<n.qty?l.setItem(n):(delete l.data.cart[n.id][n.variant],l.calculation()))},l.createItem=function(a,t,c,n,r){return{id:a,variant:t,data:{},qty:parseFloat(c),price:parseFloat(n),discount:parseFloat(r)}},l.getItem=function(a,t){return l.data.cart[a]&&l.data.cart[a][t]?l.data.cart[a][t]:null},l.setItem=function(a){l.data.cart[a.id]||(l.data.cart[a.id]={}),l.data.cart[a.id][a.variant]=a,l.calculation()},l.calculation=function(){for(var a in l.data.calculation.sum=0,l.data.calculation.ids=0,l.data.calculation.variants=0,l.data.cart){var t=l.data.cart[a];for(var c in l.data.calculation.ids++,t){var n=t[c];l.data.calculation.variants++;var r=n.qty*n.price*((100-n.discount)/100);l.data.calculation.sum=l.data.calculation.sum+r}}l.data.calculation.to_pay=l.data.calculation.sum*((100-parseFloat(l.data.calculation.discount))/100),l.saveData()},l.createOrder=function(){},l.saveData=function(){t.Azbn7.ls.obj2s(l.uid,l.data)},l.loadData=function(){var a=t.Azbn7.ls.s2obj(l.uid);a&&(l.data=a)},l.clear=function(){l.data.cart={},l.calculation(),l.saveData()},l}),t.Azbn7.mdl("Cart").loadData())}(jQuery);