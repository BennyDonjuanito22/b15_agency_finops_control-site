(function(){
  var KEY='cookie_consent_finopscontrol';
  if(localStorage.getItem(KEY))return;
  var bar=document.createElement('div');
  bar.id='cookie-bar';
  bar.style.cssText='position:fixed;bottom:0;left:0;right:0;background:#111a1d;color:#e9f2f5;padding:1rem 1.5rem;display:flex;align-items:center;justify-content:space-between;gap:1rem;z-index:9999;font-size:0.9rem;border-top:1px solid rgba(255,255,255,0.1);';
  bar.innerHTML='<span>We use cookies to improve your experience. By continuing, you agree to our <a href="privacy.html" style="color:#10b981;">privacy policy</a>.</span><button id="cookie-accept" style="background:#10b981;color:#000;border:none;padding:0.5rem 1.25rem;border-radius:8px;cursor:pointer;font-weight:600;white-space:nowrap;">Accept</button>';
  document.body.appendChild(bar);
  document.getElementById('cookie-accept').onclick=function(){localStorage.setItem(KEY,'1');bar.remove();};
})();
