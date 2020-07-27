let Discord = require('discord.js');
let client = new Discord.Client();

client.on('message', (message) => {
    if (message.content.startsWith('!hello')) {
        number = 1;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch(random) {
            case 1: message.channel.send({files: ['./gifs/wave.gif']}); break;
        }
    }

    else if (message.content.startsWith('!breh')) {
        number = 2;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch(random) {
            case 1: message.channel.send ({files: ['./img/breh-img/breh.jpg']}); break;
            case 2: message.channel.send ({files: ['./img/breh-img/sasbreh.jpg']}); break;
        }
    }

    else if (message.content.startsWith('!shock')) {
        number = 2;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch(random) {
            case 1: message.channel.send ({files: ['./img/shocked-img/shocked.jpg']}); break;
            case 2: message.channel.send ({files: ['./img/shocked-img/yooo.jpg']}); break;
        }
    }

    else if (message.content.startsWith('!omg')) {
        number = 2;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch(random) {
            case 1: message.channel.send ({files: ['./img/omg-img/boruto.PNG']}); break;
            case 2: message.channel.send ({files: ['./img/omg-img/huh.jpg']}); break;
        }
    }

    else if (message.content.startsWith('!delete')) {
        number = 2;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch(random) {
            case 1: message.channel.send ({files: ['./img/delete-img/dannydeleto.jpg']}); break;
        }
    }

    else if (message.content.startsWith('!whatsup')) {
        number = 1;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch(random) {
            case 1: message.channel.send ({files: ['./gifs/whatitdo.gif']}); break;
        }
    } 
    
    else if (message.content.startsWith('!clear') && message.mentions.users.first()) {
        let i = 0;
        message.channel.messages.forEach((msg) => {
            if (msg.author === message.mentions.users.first()) {
                msg.delete();
                i++;
            }
        });

        message.channel.send('Deleted ' + i + ' messages!');
    }
});

client.login('NzM3MzA3NTU3NTIwOTk4NTMy.Xx7dLA.SrDOarzESzmRrRhaJmTfssYMwac');