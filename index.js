const TelegramBot = require ('node-telegram-bot-api')
const TOKEN = '5956765849:AAGtsLJD4G7vrZDQctGu1hV-rrnj6nHBZkI'
const bot = new TelegramBot(TOKEN, {
    polling: true
})
const comandOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Комплимент', callback_data:'1'},{text: 'Подними настроение', callback_data:'2'}], 
            [{text: 'My sexy photo', callback_data:'3'}],
            [{text: 'Защита от пиздабола', callback_data:'4'}]
        ]
    }
    )
}
const comandOptions1 = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Показать все обещания', callback_data:'5'}],
            [{text: 'Добавить обещание', callback_data:'6'}],
            [{text: 'Удалить обещание', callback_data:'7'}], 
          
        ]
    }
    )
}

const kompliments = [
    'Женственная. Даже если назвать тебя в контексте "человеком" можно получить пизды',
    'Нежная и ранимая. Если отказаться наложить тебе покушать, то ты наверняка будешь думать, что я тебя больше не люблю и перестанешь со мной разговаривать',
    'Работящая. Постоянно работаешь над своей и так идеальной внешностью',
    'Бесценная. Невозможно столько зарабатывать, чтобы удовлетворить все твои потребности',
    'Вежливая. Постоянно напоминаешь мне говорить всем спасибо',
    'Щедрая. Ноут за 25к не каждый может подарить, только не забирай его пж, если расстанемся'
]
const photos = [
    'https://disk.yandex.ru/i/Tgo4zjV66b8n1g',
    'https://disk.yandex.ru/i/22FortCzdTIbMw',
    'https://disk.yandex.ru/i/exMfx5rfjVVLZw',
    'https://disk.yandex.ru/i/72j7XDWKkL1mlA',
    'https://disk.yandex.ru/i/ssae3GVKixB9bw',
    'https://disk.yandex.ru/i/F2UR1sPSIIPtGg',
    'https://disk.yandex.ru/i/ikrwOKXy1JrHLw',
    'https://disk.yandex.ru/i/liR3xpPcQwHI7w',
    'https://disk.yandex.ru/i/f4CX7lajHxatGA',
    'https://disk.yandex.ru/i/li3zeTa1vW4DWw',
    'https://disk.yandex.ru/i/KYMhSMfYjY1ojA',
]
const sexPhoto = [
    'Красивая', 'умная', 'загадочная', 'сообразительная'
] // доступ только с определенным айди
let promises = ['Накачаться', 'Уровень английского', 'Canada']
const mood = [
    'Ты не можешь винить меня в том, что я не работал. Трудно променять тебя на работу',
    'Ты не ленишься, ты просто любишь отдыхать',
    'Нет ничего страшного в том, что ты еще не нашла себя. Главное, что ты не доводишь себя до стресса и опустошения на нелюбимой работе',
    'Я постоянно пялюсь на красивых и сексуальных девушек. Либо на тебя либо на твои старые фотки',
    'Больше всего мне нравится, что такой интроверт как ты, не боится быть собой вместе со мной',
    'Когда мы встречались в интернете, не было такого дня, чтобы я не обнимал подушку представив тебя. Даже если мы легли спать поссорившись',
    'Даже если я буду работать 1 раз в неделю, мне все равно будет тебя не хватать ',
    'Мне нравится тебя гладить, больше чем Аляску'

]
let text = promises.join (',')
const start = async()=>{
    bot.setMyCommands([
        {command: '/start', description: 'Начать'},
    ])
    bot.on('message', async msg=>{
        const chatId = msg.chat.id
        let itemMood = Math.floor(Math.random() * mood.length);
        let itemKompliment = Math.floor(Math.random() * kompliments.length);
        let itemPhoto = Math.floor(Math.random() * photos.length);
        if (msg.text == '/start') {await bot.sendMessage(chatId,'What do you want? ',{
                reply_markup:{
                    keyboard:[
                        ['Комплимент','Подними настроение'],
                        ['My sexy photo'],
                        ['Защита от пиздабола']
                    ]
                }
            })
        }
        if (msg.text == 'Подними настроение'){
            await  bot.sendMessage(chatId,mood[itemMood],)
        }
        else if (msg.text == 'Комплимент'){
            await bot.sendMessage(chatId,kompliments[itemKompliment])
        }
        else if (msg.text == 'My sexy photo'){
             bot.sendPhoto(chatId, photos[itemPhoto])
        }
        else if (msg.text == 'Защита от пиздабола'){
            await bot.sendMessage(chatId,"ХУХ",{
                reply_markup:{
                    keyboard:[
                        ['Показать все обещания'],
                        ['Добавить обещание'],
                        ['Назад']
                    ]
                }
            })  
        }
        else if (msg.text == 'Показать все обещания'){
            await  bot.sendMessage(chatId,text)

        }
        else if (msg.text == 'Назад'){
            await  bot.sendMessage(chatId,'What do you want? ',{
                reply_markup:{
                    keyboard:[
                        ['Комплимент','Подними настроение'],
                        ['My sexy photo'],
                        ['Защита от пиздабола'],
                    ]
                }
            })
        }
        else if (msg.text == 'Добавить обещание'){
        await  bot.sendMessage(chatId,'Пиши')
        }
        else if (!(msg.text == 'Добавить обещание')&&!(msg.text == 'Защита от пиздабола')&&!(msg.text == '/start')&&!(msg.text == 'My sexy photo')&&!(msg.text == 'Назад')&&!(msg.text == 'Показать все обещания')&&!(msg.text == 'Подними настроение')&&!(msg.text == 'Комплимент')){
            promises.push(msg.text)
                text = promises.join (',')
        }

       /* bot.on('callback_query',async msg =>{
            const data = msg.data
            const chatId = msg.message.chat.id
            if (data == '5'){
            await bot.sendMessage(chatId,text,comandOptions1)
        }
        }
        )
        bot.on('callback_query',async msg =>{
            const data = msg.data
            const chatId = msg.message.chat.id
            if (data == '6'){
            await bot.sendMessage(chatId,'Пиши:')
            bot.on('message', async msg=>{
                promises.push(msg.text)
                text = promises.join (',')
            })
        }
        }
        )
    /*bot.on('callback_query', async msg =>{
        const data = msg.data
        const chatId = msg.message.chat.id
        let itemMood = Math.floor(Math.random() * mood.length);
        let itemKompliment = Math.floor(Math.random() * kompliments.length);
        let itemPhoto = Math.floor(Math.random() * sexPhoto.length);
        let uslovie1 = 0

        if (data == '2'){
                await bot.sendMessage(chatId,mood[itemMood],comandOptions)
        }
        if (data == '1'){
           await bot.sendMessage(chatId,kompliments[itemKompliment],comandOptions)
        }
        if (data == '3'){
           await bot.sendMessage(chatId,sexPhoto[itemPhoto],comandOptions)
        }
        if (data == '4'){
            await bot.sendMessage(chatId,sexPhoto[itemPhoto],comandOptions1)
         }
         if (data == '5'){
            await bot.sendMessage(chatId,promises,comandOptions1)
         }
    })    */
    })
}
start()

