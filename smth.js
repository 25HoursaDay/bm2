  let win = window.open();
  let url = "";
  win.document.write('<div style=margin-left:auto;margin-right:auto;text-align:center><iframe src="'+url+'" width=100% height=100% style=border:none></iframe></div>');
  win.append('<script> if (window.location == "about:blank"){ win.focus(); } else { win.location.replace("https://www.google.com/?safe=active&ssui=on");} </script>');
