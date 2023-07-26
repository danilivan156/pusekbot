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
    'Ты мой источник энергии, юношеского максимализма и амбиций',
    'Добрая и ласковая. Когда просишь наложить покушац',
    'Заботливая. Когда вспоминаешь, что скоро выйдет айфон ',
    'Неповторимая. Иначе бы миру пришёл пиздец с ещё одной твоей копией ',
    'Независимая. По-любому буду переводить бабки даже после расставания. ',
    'Особенная и единственная. Кто ещё может сочетать в себе социофобию и стеснительность с неадекватностью, резкостью ',
    'Ты можешь уничтожить человека в любом споре. Особенно меня и Лену. И даже если не права',
    ' Интересная. С тобой не нужно искать тем для бесед, разговор идёт сам собой',
    'Умеешь рассмешить. И при желании и даже, когда хочешь унизить и растоптать, а не рассмешить',
    'Сногсшибательная. Когда ты в гневе летишь на меня я отлетаю, как Бородулина Ульяна',
    'Игривая. В аватарию и аутласт, но регулярные шлепки по жопе тоже считаются',
    'Незабываемая. Как забыть, если у меня скринов диалогов больше чем своих фоток',
    'Упрямая. Пока тебе не объяснишь то, что ты хочешь, ты не отстанешь. Даже если на это уйдёт 8 часов',
    'Решительная. Если ты для себя что-то решила в своей голове, то здесь даже боженька не поможет тебя в этом переубедить.'


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
    'Есть девушки ради которой не хочется выйти из игры, а есть ты при виде которой думаешь что зп 90к в месяц это ущербно мало.',
    'С тобой знакомятся только долбоебы, потому что им нечего терять. Успешные парни думают, что не дотянули и ты будешь перетягивать одеяло. А всего добивающихся мужиков тебе просто еще не попадалось.',
    'Не было такого момента когда я не хотел бы тебя обнять, даже если мне было больно.',
    'Тебя хейтят что ты безработная, потому что завидуют что ты беззаботная',
    'Хорошо что в 2013 году ты не поехала на концерт бибера, иначе на месте селены гомес была ты и тебя у меня не было бы .',
    'Тупо я в джеммоле с тобой: https://vk.com/clip-97954625_456244564?c=0',
    'Если пройдешь тест, то с меня шмотка с WB https://t.me/+dN-fueDUOsM3NGFi',
    'У тебя есть человек, у которого ты занимаешь 9/10 жизни',
    'Спустя 9 лет ежедневного общения у нас до сих пор есть темы для разговора, и мы не отдалились друг от друга',
    'Извини, но где-то эта правда должна была всплыть. Я лучше тебя играю в аутласт',
    'Я буду хотеть заваривать тебе чай даже после того, как ты попытаешься меня убить',
    'Если ты обратишься к пластическому хирургу, то он скажет, что ничем не сможет помочь. Потому что лучше некуда',
    'Если тебя волнует, что ты злая токсичная сучка то подумай, достается ли много в жизни сверх добрым и потыкающим людям. Это твой двигатель прогресса лучшей жизни',

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
                        ['Защита от пиздабола'],
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

