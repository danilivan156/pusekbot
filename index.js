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
    'Исповедница. Нормальные люди живут в страхе, что могут лишиться работы или жизни. Я живу в страхе, что ты можешь уйти' ,
    'Изящная. Изящно и сексуально выгибаешь гиперлардозную поясницу, когда сидишь',
    'Горячая. С тобой всегда страшно конфликтовать, но зато какое облегчение что ты выходишь из него живым, всего с парой ссадин',
    'Упорная. С 2016 года стремилась к победе в фкм хотя была в чс у админов, и все-таки добилась своего.',
    'Одаренная и избирательная. У тебя получается всё за что ты берешься, жалко только что увлечения эти тебе не по душе, сидели бы уже давно на мальдивах за твой счет',
    'Сочетаешь в себе несочетаемое. При скромном и тихом образе жизни  остаешься самой яркой и запоминающейся. Думаю лилиана до сих пор тебя вспоминает ',
    'Улыбчивая. На столько, что камеры даже не в состоянии эту улыбку фиксировать на снимке',
    'Скрупулёзная. Только ты можешь сидеть за фотошопом по 12 часов подряд',
    'Решительная. Твой чемодан становится собранным минимум пару раз в месяц, боюс дышать'
    
]
const photos = [
    'https://disk.yandex.ru/i/Tgo4zjV66b8n1g',

]
const sexPhoto = [
    'Красивая', 'умная', 'загадочная', 'сообразительная'
] // доступ только с определенным айди
let promises = ['Накачаться', 'Уровень английского', 'Canada']
const mood = [
    'Когда я тебя обнимаю, я забываю о существовании проблем',
    'Когда будешь грустить вспомни, что все твои желания доступны и легальны и в твоих пабликах нет группы о продаже наркоты, ток переписка с батей',
    'У тебя есть талант. Талант делать счастливым человека одним своим присутствием',
    'Я просыпаюсь в хорошем настроении, если открыв глаза я вижу что ты ко мне очень близко',
    'У тебя нет обязанностей и обязательств. Ты просыпаешься свободным человеком',
    'Когда будешь думать что у тебя тяжелая судьба то вспомни, что кому-то достались тюбики, с которыми ты общалась, но от которых тебя отгородила судьба',
    'Если у тебя нет настроения, то вспомни, что кто-то получает 300 рублей за лайки и думает, что теперь можно не ходить на работу',
    'Если тебя угнетает, что у тебя нет увлечения и работы по жизни, значит ты по-прежнему амбициозная и хочешь совершенствоваться, а не являешься люмпеном и дном. Кто-то готов работать в бифри несколько лет без угнетения, думая что жизнь удалась',
    'Просто поищи фотки, которые можно будет сделать на мальдивах и куда можно будет съездить там. Лучше помечать о ближайшем будущем ,чем погрустить о том што ты сейчас не разъезжаешь на своей розовой машине.',
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

