function btn(){
      let image = document.getElementById('image1');
      let images = ['https://avatars.githubusercontent.com/u/81680997?s=400&u=ed7cae600405403aaf1c4f7120dc80c8a6b06ffe&v=4', 'https://media.discordapp.net/attachments/932970063718387763/979116417012072519/unknown.png?width=595&height=670',
      'https://media.discordapp.net/attachments/932970063718387763/979116561967247400/unknown.png?width=658&height=671'];
      let random = Math.floor(Math.random() * 3);
      image.src = images[random];
    }