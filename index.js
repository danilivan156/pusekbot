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
   'Занятая. Не хватает времени на хобби. 3 часа французский 3 часа английский вот и сутки бл кнчились',
    'Исркенняя. Искренне говоришь какие хуйлом я был, аж плакать иногда хочется',
    'Энергичная. В том плане что у тебя постоянно должна быть энергия, ведь ты как вампир моей питаешься',
    'Девушка-словарь. Знаешь много слов и на англ и на русском, но иногда чтобы найти слово в твоей голове во время разговора, нужно очень долго листать и искать'
    
]
const photos = [
    'https://disk.yandex.com.am/i/V5Yy7AP26eze-A',
    'https://disk.yandex.com.am/i/ZQsCIeAVuHr6bw',
    'https://disk.yandex.com.am/i/n7brawZETZXXJg',
    'https://disk.yandex.com.am/i/I9sPEjuCN80CFg',
    'https://disk.yandex.com.am/i/7gPOQ5wWPuqWWA',
    'https://disk.yandex.com.am/i/sR3tlIeVVTYTPw',
    'https://disk.yandex.com.am/i/uhjk3sB23stvOQ',
    'https://disk.yandex.com.am/i/-Oh4rOZ7kN8H1g',
    'https://disk.yandex.com.am/i/mamT9bRMS6dVKg',
    'https://disk.yandex.com.am/i/bf9G_HI_HPaQ8g',
    'https://disk.yandex.com.am/i/-hGXViU2sR8sdg',
    'https://disk.yandex.com.am/i/3_Rg2amkWIm2xQ',
    'https://disk.yandex.com.am/i/ss5_Xsu4r9lXNw',
    'https://disk.yandex.com.am/i/VkClHEDEemu9Kw',
    'https://disk.yandex.com.am/i/Ie5ST-4sz0bR-Q',
    'https://disk.yandex.com.am/i/cK78mcGU96KTyQ',
    'https://disk.yandex.com.am/i/EiV2yfR1pchKWg',
    'https://disk.yandex.com.am/i/ODo3gQTtkf48fg'

]
const sexPhoto = [
    'Красивая', 'умная', 'загадочная', 'сообразительная'
] // доступ только с определенным айди
let promises = ['Накачаться', 'Уровень английского', 'Canada']
const mood = [
'Мб это странно, но не смотря на то что мы уже два года спим вместе, я всё равно думаю о тебе перед сном',
'Ты научила видеть меня скрытый абьюз со стороны Лены, но это сыграло не в твою пользу. Теперь я понял что повелительница абьюза это ты, а лена лишь начинающая ',

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

