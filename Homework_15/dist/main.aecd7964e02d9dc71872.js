(()=>{"use strict";!function(){const o=15.678,e=123.965,t=90.2345,n=[o,e,t];console.log("Максимальна ціна: ",Math.max(...n)),console.log("Мінімальне ціна: ",Math.min(...n));const r=229.8775;console.log("Сума вартості всіх товарів: ",r);const l=Math.floor(o)+Math.floor(e)+Math.floor(t);console.log("Сума вартості всіх товарів, округлена в меньшу сторону: ",l),console.log("Сума округлена до сотень :",100*Math.round(r/100)),l%2==0?console.log("Округлена сума всіх товарів є парним числом: ",!0):console.log("Округлена сума всіх товарів є парним числом: ",!1),console.log("Решта: ",500-r),console.log("Середнє значення цін, округлене до другого знаку після коми: ",(r/3).toFixed(2));const a=Math.floor(50*Math.random()),h=(o-o*a/100).toFixed(2),c=(e-e*a/100).toFixed(2),i=(t-t*a/100).toFixed(2);console.log("Ціна зі знижкою 'Tea': ",h),console.log("Чистий прибуток 'Tea': ",h-7.839),console.log("Ціна зі знижкою 'Sandwich': ",c),console.log("Чистий прибуток 'Sandwich': ",c-61.9825),console.log("Ціна зі знижкою 'Free': ",i),console.log("Чистий прибуток 'Free': ",i-t/2),console.log(`Максимальна ціна: ${Math.max(o,e,t)}\nМінімальна ціна: ${Math.min(o,e,t)}\nСума вартості всіх товарів: 229.8775\nСума вартості всіх товарів, округлена в меньшу сторону: ${Math.floor(o)+Math.floor(e)+Math.floor(t)}\nСума округлена до сотень: ${100*Math.round(r/100)}\n${Math.floor(Math.floor(o)+Math.floor(e)+Math.floor(t))%2==0?"Округлена сума всіх товарів є парним числом "+!0:"Округлена сума всіх товарів є парним числом "+!1}\nРешта: 270.1225\nСереднє значення цін, округлене до другого знаку після коми: ${(139.643+t/3).toFixed(2)}\nЦіна зі знижкою 'Tea': ${(o-o*Math.floor(50*Math.random())/100).toFixed(2)}\nЧистий прибуток 'Tea': ${(o-o*a/100).toFixed(2)-7.839}\nЦіна зі знижкою 'Sandwich': ${(e-e*Math.floor(50*Math.random())/100).toFixed(2)}\nЧистий прибуток 'Sandwich': ${(e-e*a/100).toFixed(2)-7.839}\nЦіна зі знижкою 'Free': ${(t-t*Math.floor(50*Math.random())/100).toFixed(2)}\nЧистий прибуток 'Free': ${(t-t*a/100).toFixed(2)-7.839}\n`),document.querySelector(".hw-1").innerHTML=`Максимальна ціна: ${Math.max(o,e,t)} <br>\nМінімальна ціна: ${Math.min(o,e,t)}<br>\nСума вартості всіх товарів: 229.8775<br>\nСума вартості всіх товарів, округлена в меньшу сторону: ${Math.floor(o)+Math.floor(e)+Math.floor(t)}<br>\nСума округлена до сотень: ${100*Math.round(r/100)}<br>\n${Math.floor(Math.floor(o)+Math.floor(e)+Math.floor(t))%2==0?"Округлена сума всіх товарів є парним числом "+!0:"Округлена сума всіх товарів є парним числом "+!1}\nРешта: 270.1225<br>\nСереднє значення цін, округлене до другого знаку після коми: ${(139.643+t/3).toFixed(2)}<br>\nЦіна зі знижкою 'Tea': ${(o-o*Math.floor(50*Math.random())/100).toFixed(2)}<br>\nЧистий прибуток 'Tea': ${(o-o*a/100).toFixed(2)-7.839} <br>\nЦіна зі знижкою 'Sandwich': ${(e-e*Math.floor(50*Math.random())/100).toFixed(2)} <br>\nЧистий прибуток 'Sandwich': ${(e-e*a/100).toFixed(2)-7.839}<br>\nЦіна зі знижкою 'Free': ${(t-t*Math.floor(50*Math.random())/100).toFixed(2)}<br>\nЧистий прибуток 'Free': ${(t-t*a/100).toFixed(2)-7.839}\n`}(),function(){let o=Number(prompt("Введіть перше значення"));for(;!Number.isInteger(Number(o))||Number.isNaN(Number(o))||""===o||o<0;)alert("Невірне значення, введіть ціле число"),o=Number(prompt("Введіть перше значення, значення повинне бути цілим числом"));console.log("Перше значення: ",o);let e=Number(prompt("Введіть друге значення"));for(;!Number.isInteger(Number(e))||Number.isNaN(Number(e))||""===e||e<0;)alert("Невірне значення, введіть ціле число"),e=Number(prompt("Введіть друге значення, значення повинне бути цілим числом"));for(console.log("Друге значення: ",e);e<=o;)e=Number(prompt("Друге значення повинно бути більшим за перше, введіть вірне значення"));for(;!Number.isInteger(Number(e))||Number.isNaN(Number(e))||""===e||o>e<0;)alert("Невірне значення, введіть ціле число"),e=Number(prompt("Введіть друге значення, значення повинне бути цілим числом"));const t=confirm("Пропускати парні числа?");let n=0;if(!t)for(let o=0;o<=e;o++)n+=o;if(t)for(let o=1;o<=e;o++)o%2&&(n+=o);alert("Результат обчислень: "+n),document.querySelector(".hw-2").innerHTML=`\n  Перше значення: ${o}<br>\n  Друге значення: ${e}<br>\n  Пропускати парні?: ${t}<br>\n  Результат обчислень: ${n}`}(),function(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;o=prompt("Введіть кілкість символів");const e="0123456789";let t="";for(var n=1;n<=o;n++){let o=Math.floor(Math.random()*e.length);t+=e.substring(o,o+1)}document.querySelector(".hw-3").innerHTML=`password: ${t}`}();const o=["Олександр","Ігор","Олена","Іра","Олексій","Світлана"],e=["Диференційне рівняння","Теорія автоматів","Алгоритми і структури даних"],t=n(o);function n(o){let e=[[(o=["Олександр","Ігор","Олена","Іра","Олексій","Світлана"])[0],o[2]],[o[1],o[3]],[o[4],o[5]]];document.querySelector(".hw-4").innerHTML=`${e}`}n(),console.log(n(o));const r=l(t,e);function l(o,e){const t=o.slice(),n=e.slice();let r=[];for(let o=0;o<t.length;o++)r.push([t[o].join(" i "),n[o]]);return r}console.log(l(t,e));const a=function(o,e){let t=[];return t.push([o[0],e[0]],[o[1],e[1]],[o[2],e[2]],[o[3],e[3]],[o[4],e[4]],[o[5],e[5]]),t}(o,[4,5,5,3,4,5]);console.log(a);const h=function(o){let e=[];for(let t=0;t<o.length;t++){let n=Math.round(4*Math.random()+1);e.push([...o[t],n])}return e}(r);console.log(h)})();
//# sourceMappingURL=main.aecd7964e02d9dc71872.js.map