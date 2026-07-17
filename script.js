
async function sharePage(){
  const data={
    title:document.title,
    text:"IDZIAK SKP – Stacja Kontroli Pojazdów i diagnostyka w Częstochowie",
    url:window.location.href
  };
  if(navigator.share){
    try{await navigator.share(data)}catch(e){}
  }else{
    try{
      await navigator.clipboard.writeText(window.location.href);
      alert("Link do strony został skopiowany.");
    }catch(e){
      window.prompt("Skopiuj link:",window.location.href);
    }
  }
}
