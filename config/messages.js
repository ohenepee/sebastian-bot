const messages = {

    welcomeNew : [
      'Рад тебя видеть в нашем чате, $name.',
      'Вы только посмотрите, кто к нам заглянул. Это же $name!',
      'Привет, $name. Какими судьбами?',
      'Здравствуй, $name. Как дела?',
      'Привет, $name. В этом чате мы обсуждаем учение толтеков. Ты же знаешь кто это такие, да?',
      'Добро пожаловать, $name. Какая у тебя конфигурация энергетического тела? Мне это нужно в бумагах указать.',
      'Привет, $name. Сталкеры считают, что все люди делятся на [три категории](https://nagualchat.github.io/Карлос%20Кастанеда%20-%20Сила%20безмолвия.html#L1702). К какой относишься ты?',
      'Приветствую, $name. Ты уже прочёл книги Кастанеды или только собираешься? В любом случае, советую заглянуть в нашу [библиотеку](https://nagualchat.github.io).'
    ],

    welcomeRet1 : [
      'О, это же опять $name. Я даже соскучиться не успел.',
      'О, это же опять $name. Быстро ты.'
    ],

    welcomeRet2 : [
      'С возвращением, $name. Где пропадал?',
      'С возвращением, $name. Давно тебя не было видно.'
    ],

    goodDay : [
	   'Доброе утро. Как спалось?',
	   'И тебе утра доброго.',
	   'Как спалось, что снилось?',
	   'Утро — плохое время для мага.'
    ],

    goodNight : [
      'Желаю хорошо посновидеть.',
      'Ясных снов!',
      'Не забудь сегодня посмотреть на руки во сне.'
    ],

    answer : [
      'Да.',
      'Нет.'
    ],

    answerChoice : [
      '$variant.',
      '$variant. Тут и думать нечего.',
      'Конечно же, $variant.',
      'Спроси что попроще.'
    ],

    repTop : '📊 <b>Топ-20 по количеству плюсов</b>\n\n',
    repStore : '$name, у тебя на счету $points. Ты можешь обменять их на некоторые ништяки: \n\n' +
    '*Цитата (2)* — в группу будет отправлен случайный отрывок из книги «Колесо времени» Кастанеды.\n' +
    '*Шутка (5)* — в группу будет отправлен анекдот или забавный рассказ.\n' +
    '*Скрепка (10)* — даёт право прикрепить любое сообщение на один день (набери в ответ на него команду `/pin`).\n' +
    '*Подарок (1+)* — возможность перевести произвольное число плюсов другому человеку (набери команду `/gift количество` в ответ на любое его сообщение).',
    quotePrice: 2, jokePrice: 5, pinPrice: 10,

    buyComplete: 'Участником $name приобретена $thing за $price (осталось $points).',
    buyNotEnough : '$name, у тебя недостаточно плюсов ($points).',
    storeWrongId : 'Это меню предназначено другому пользователю.',

    giftMessage: '💐 $name дарит $points участнику $name2.',
    pinMessage: 'Участник $name приобрёл возможность прикрепить сообщение, потратив на это $price (осталось $points).',

    deleteDel1 : '$count участника $name удалено за $reason.',
    deleteDel2 : 'Сообщения ($names) удалены за $reason.',
    deleteSpam : 'Сообщение участника $username было распознано как спам и автоматически удалено.\n\nЕсли кнопка «Показать» не работает, открой приват со мной и нажми «START».',

    restrictVoice : '$username помещается в изолятор на $duration. В течении этого времени он не сможет отправлять сообщения в чат.',
    restrictMedia : '$username помещается в карантин на $duration. В течении этого времени он не сможет отправлять в чат медиа-контент любого типа.',
    kick : '$username получает пинком под зад.',
    ban : '$username изгоняется из чата без возможности вернуться обратно.',
    fail : 'Невозможно выполнить: участник уже покинул группу или является админом.',

    modAdd : '$username обрёл силу и власть. Трепещите смертные!',
    modDel : '$username утратил силу и власть.',
    modList : '👥 <b>Список модераторов</b>\n\n',

    favAdd : 'Закладка $fav добавлена. Посмотреть список закладок можно набрав команду /favs.',
    favAddDupl : 'Такая закладка уже существует.',
    favAddWrong : 'Чтобы добавить сообщение в закладки, пришлите в ответ на него команду `/fav название`. Название закладки может содержать несколько слов, но в целом должно быть не длиннее 80 символов.',
    favList: '🔖 <b>Избранные сообщения</b>\n\n',
    favEdit: 'Закладка переименована в $fav.',
    favDel: 'Закладка $fav удалена.',
    favNotFound: 'Закладка $fav не найдена.',

    kickBotImg: 'AgADAgADZKgxG0kTEEp3y_OFm4S88HHZDw4ABCY4BHnDw3Sq5GcEAAEC',
    kickBotMsg: 'Должен остаться только один!',

    menuDelete: 'Выберите причину удаления или введите свою. Фраза бота будет выглядеть примерно так: «... удалено за $причина».',
    menuRestrict: '`[Войс]` и `[Медиа]` позволяют запретить участнику отправку сообщений или медиа-контента (стикеры, изображения, войсы и т.д). Ограничение устанавливается на время, по истечению которого автоматически снимается.',
    menuMute: 'Выберите срок ограничения.',
    menuKick: 'Выберите причину изгнания или введите свою. Фраза бота будет выглядеть примерно так: «... забанен за $причина».',
    menuCancel: 'Операция отменена.',

    restrictReasons: {spam: 'спам', immoral: 'безнравственное содержание', abuse: 'оскорбительное содержание'},
    btnDelete: [[{text: 'Спам', callback_data: 'delete_spam'}, {text: 'Срам', callback_data: 'delete_immoral'}, {text: 'Оскорбление', callback_data: 'delete_abuse'}, {text: 'Отменить', callback_data: 'cancel'}]],
    btnRestrict: [[{text: 'Войс', callback_data: 'mute_voice'}, {text: 'Медиа', callback_data: 'mute_media'}, {text: 'Кик', callback_data: 'kick'}, {text: 'Бан', callback_data: 'ban'}, {text: 'Отмена', callback_data: 'cancel'}]],
    btnMute1Duration: [[{text: '3h', callback_data: 'mute_voice(3h)'}, {text: '12h', callback_data: 'mute_voice(12h)'}, {text: '1d', callback_data: 'mute_voice(1d)'}, {text: '7d', callback_data: 'mute_voice(7d)'}, {text: '30d', callback_data: 'mute_voice(30d)'}, {text: '🔙', callback_data: 'restrict'}]],
    btnMute2Duration: [[{text: '3h', callback_data: 'mute_media(3h)'}, {text: '12h', callback_data: 'mute_media(12h)'}, {text: '1d', callback_data: 'mute_media(1d)'}, {text: '7d', callback_data: 'mute_media(7d)'}, {text: '30d', callback_data: 'mute_media(30d)'}, {text: '🔙', callback_data: 'restrict'}]],
    btnKickReason: [[{text: 'Спам', callback_data: 'kick_spam'}, {text: 'Оскорбления', callback_data: 'kick_abuse'}, {text: '🔙', callback_data: 'restrict'}]],
    btnBanReason: [[{text: 'Спам', callback_data: 'ban_spam'}, {text: 'Оскорбления', callback_data: 'ban_abuse'}, {text: '🔙', callback_data: 'restrict'}]],
    btnShowDeleted : 'Показать',

    reSend : 'Копия удалённого сообщения отправлена в приват.',
    reSendErr : 'Ботам запрещено первыми начинать разговор с незнакомыми пользователями. Чтобы Себастьян мог переслать вам удалённое сообщение, сначала откройте приват с ним и познакомьтесь, нажав кнопку «START».',

    sessionOutd: 'Время действия операции истекло. Попробуйте заново.',

    help :
    '*Поиск\n*' +
    'Поиск по книгам Кастанеды, Тайши и Флоринды работает в инлайн-режиме. Чтобы им воспользоваться, наберите в поле ввода сообщения @toltebot `искомая фраза`. Также можно ввести `"точный запрос"`, оформив его в кавычки или `-исключить` слово из поиска, поставив перед ним минус. Нажатие по одному из найденных результатов отправляет цитату в тот чат, который сейчас открыт.\n\n' +
    '*Плюсы\n*' +
    'Чтобы выразить согласие или отблагодарить кого-нибудь, напишите в ответ (reply) на его сообщение «спасибо» и я внесу запись об этом в его послужной список. ' +
    'Также принимаются «благодарю», «спс», «thx», «плюсую», «+» и 👍. Узнать количество полученных благодарностей можно набрав команду /buy, там же можно обменять их на кое-какие плюшки. Команда /top выводит рейтинг участников.\n\n' +
    '*Закладки\n*' +
    'Чтобы содержащие важную информацию или просто интересные сообщения не затерялись среди ординарных разговоров, реализована функция добавления закладок. ' +
    'Добавить сообщение в избранное можно написав в ответ на него команду `/fav название закладки`. Посмотреть список избранного: /favs. \n\n' +
    '*Модерирование\n*' +
    'Для доступа к функциям удаления и ограничения прав сделайте форвард нужных сообщений боту в приват (работает только у тех, кто добавлен в список /mod).',

    ahelp : 'Список доступных админам команд:\n' +
    '`/say текст` : отправляет в чат сообщение от лица бота. Работает markdown-разметка: `_курсив_, *жирный*, [ссылка](http://)`. Перенос строки: `/n`.\n' +
    '`/mod` : назначает участника модератором (и наоборот). Без цитирования выводит список модов.\n' +
    '`/е` и `/d` : команды редактирования и удаления закладок. Аргументом указывается ID избранного сообщения.',
  };

  module.exports = messages;
