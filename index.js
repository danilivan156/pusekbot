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
    'Слишком красивая. На фоне тебя я чувствую себя орком(',
    'Искренняя. Всегда честно и правдиво говоришь, как я тебя заебал' ,
    'Притягательная. Постоянно на улице притягиваешь взгляды завистливых баб. ',
    'Заботливая. Заботишься о моей фигуре и всегда точишь шоколадку одна',
    'Харизматичная. А не корчишь рожи',
    'Чуткая. Если я без настроения сразу начнешь говорить, что я тебя не люблю и я переключаюсь на решение данного конфлика, ибо нехуй грустить.',
    'Загадочная. Даже тебе самой неизвестно почему ты вновь без настроения',
    'Сообразительная. Понимаешь где водятся большие деньги и именно туда меня пихаешь',
    'Понимающая и настойчивая. Понимаешь как с твоим мерзотным характером нелегко, но настаиваешь на том, что над ним не нужно работать и это твоя изюминка ',
    'Целеустремленная. Сегодня ты хочешь билет на концерт Андрюши Леницкого, а завтра на концерт Джастина Бибера',
    'Тактичная. Ты дрищ и мало зарабатываешь но это шутка',
    'С тобой всегда есть о чем поговорить. Ты можешь найти 100 и 1 тему для разговора о том што я делал не так ',
    'Непредсказуемая. Сегодня ты в люберцах, послезавтра в Даламане, хотя вчера ты был в Кирове.',
    
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
    'Жизнь бумеранг, поэтому у кого-то сейчас долгов на 100к и заблокированы счета',
    'У твоих сверстниц сейчас есть дети', 
    'У тебя было больше роз чем у всех твоих одноклассниц',
    'Ты поступила в один из лучших вузов страны, а потом еще раз на лайте в другой',
    'Ты сдала математику лучше всех в классе',
    'Тебе завтра просыпаться в пол второго около часу третьего дня и не идти на 12 часовую смену',
    'У тебя есть человек который оправдает тебя во всём',
    'Если у тебя что-то не получается, проблема не в тебе!!1!',
    'В 2024 ты будешь отмечать рождество в Торонто или LA',
    'Если нам когда-нибудь придется расстаться то я всегда захочу возобновить с тобой отношения, даже если придется на то время разорвать нынешние',
    'Ты единственная с кем я хочу разговаривать, когда у меня нет настроения',
    'У тебя всегда будет человек, который тебя любит, а еще у тебя есть аляскинское безобразие: ', // вставить фото аляски
    'Если бы тебя не было со мной, я бы сейчас был на днище',
    'Благодаря тебе я не существую, а полноценно живу',
    'Ровно половину своей жизни я собирал и хранил твои фотографии. Уверен у меня их больше чем у тебя',
    'Ты - обложка. И если бы я смотрел на внешность, то я бы не выбрал тебя, потому что не дотянул бы никогда.',
    'Тебе можно не ходить в зал ты и так секси, лучше заходи сюда. https://burgerkingrus.ru/',
    'У тебя есть мечта и тебе есть с кем к ней идти',

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
            await bot.sendMessage(chatId,"\xF0\x9F\x98\x84",{
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

