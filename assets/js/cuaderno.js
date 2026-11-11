(()=>{'use strict';
 const entries=(window.ARDURA_ENTRADAS||[]).filter(e=>e.visible!==false);
 const el=(tag,cls,text)=>{let x=document.createElement(tag);if(cls)x.className=cls;if(text!==undefined)x.textContent=text;return x};
 const formatDate=s=>{if(!s)return '';let m=/^(\d{4})-(\d{2})-(\d{2})$/.exec(s);if(!m)return s;return new Date(+m[1],+m[2]-1,+m[3]).toLocaleDateString('es-ES',{day:'numeric',month:'long',year:'numeric'})};
 const list=document.getElementById('journal-list');
 if(list){if(!entries.length)list.append(el('p','journal-empty','Pronto habrá palabras por aquí.')); entries.forEach((e,i)=>{let a=el('a','journal-card');a.href='texto.html?entrada='+encodeURIComponent(e.id);let top=el('div','journal-card-meta');top.append(el('span','',e.etiqueta||'Cuaderno'));if(e.fecha)top.append(el('span','',formatDate(e.fecha)));a.append(top,el('h2','',e.titulo),el('p','',e.extracto||''),el('span','journal-read','Leer texto ↗'));list.append(a)})}
 const article=document.getElementById('journal-article');
 if(article){const id=new URLSearchParams(location.search).get('entrada');const e=entries.find(x=>x.id===id);if(!e){article.append(el('h1','','No encontramos ese texto'),el('p','','Puede que el enlace haya cambiado o que el texto todavía no esté publicado.'));return}
 const meta=el('div','journal-article-meta');meta.append(el('span','',e.etiqueta||'Cuaderno'));if(e.fecha)meta.append(el('span','',formatDate(e.fecha)));
 article.append(meta,el('h1','',e.titulo));if(e.extracto)article.append(el('p','journal-standfirst',e.extracto));let body=el('div','journal-body');(e.parrafos||[]).forEach(p=>body.append(el('p','',p)));article.append(body);document.title=e.titulo+' — Cuaderno de Ardura';}
})();
