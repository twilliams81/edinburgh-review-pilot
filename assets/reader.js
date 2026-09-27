const button=document.getElementById('view-toggle');
if(button){button.addEventListener('click',()=>{const show=button.getAttribute('aria-pressed')!=='true';document.getElementById('original').hidden=!show;document.getElementById('flowed').hidden=show;button.setAttribute('aria-pressed',String(show));button.textContent=show?'Show reading view':'Show original line breaks';});}
