const TelegramBot = require('node-telegram-bot-api')
const moment = require('moment');
const { botToken, environment } = require('../config/app.config');
const { searchMovies } = require('./movie.service');
require('dotenv').config()

const data = [
  {
    "modified": {
      "time": "2024-03-07T16:15:23.000Z"
    },
    "_id": "65e985a9f5295c8cd1517183",
    "name": "Bác Sĩ Vô Danh Phần 8",
    "origin_name": "Doctor Who (Season 8)",
    "content": "<p>Bộ phim kể về cuộc phiêu lưu của Bác sĩ (nguyên văn là Doctor, có thể dịch là Tiến sĩ), một chúa tể thời gian. Bác sĩ đã đi xuyên không gian và thời gian để bảo vệ và giúp đỡ mọi sinh vật trên vũ trụ với một cỗ máy thời gian tên là TARDIS có bề ngoài không khác gì một chiếc hộp điện thoại cảnh sát những năm 1950 ở Anh quốc. Trong các chuyến phiêu lưu của mình, các Bác sĩ thường có những người bạn đồng hành rất vui tính và dễ mến...</p>",
    "type": "series",
    "status": "completed",
    "thumb_url": "https://img.ophim12.cc/uploads/movies/bac-si-vo-danh-phan-8-thumb.jpg",
    "is_copyright": false,
    "sub_docquyen": false,
    "trailer_url": "",
    "time": "60 Phút / Tập",
    "episode_current": "Hoàn Tất (13/13)",
    "episode_total": "13 Tập",
    "quality": "HD",
    "lang": "Vietsub",
    "notify": "",
    "showtimes": "",
    "slug": "bac-si-vo-danh-phan-8",
    "year": 2014,
    "view": 103,
    "actor": [
      "Matt Smith",
      "David Tennant",
      "Jenna Coleman"
    ],
    "director": [
      ""
    ],
    "category": [
      {
        "id": "620a21b2e0fc277084dfd0c5",
        "name": "Hành Động",
        "slug": "hanh-dong"
      },
      {
        "id": "620a2238e0fc277084dfd291",
        "name": "Tâm Lý",
        "slug": "tam-ly"
      },
      {
        "id": "620a2293e0fc277084dfd489",
        "name": "Phiêu Lưu",
        "slug": "phieu-luu"
      },
      {
        "id": "620e4c0b6ba8271c5eef05a8",
        "name": "Gia Đình",
        "slug": "gia-dinh"
      }
    ],
    "country": [
      {
        "id": "620a2370e0fc277084dfd91e",
        "name": "Anh",
        "slug": "anh"
      },
      {
        "id": "620a2381e0fc277084dfd9c6",
        "name": "Canada",
        "slug": "canada"
      }
    ],
    "chieurap": false,
    "poster_url": "https://img.ophim12.cc/uploads/movies/bac-si-vo-danh-phan-8-poster.jpg",
    "episodes": [
      {
        "server_name": "Vietsub #1",
        "server_data": [
          {
            "name": "1",
            "slug": "1",
            "filename": "bac-si-vo-danh-phan-8-doctor-who-season-8-tap-1",
            "link_embed": "https://vip.opstream12.com/share/e6d76b26416ca5de309d8fd741894447",
            "link_m3u8": "https://vip.opstream12.com/20220415/10471_853a6830/index.m3u8"
          },
          {
            "name": "2",
            "slug": "2",
            "filename": "bac-si-vo-danh-phan-8-doctor-who-season-8-tap-2",
            "link_embed": "https://vip.opstream12.com/share/2db3545a41db81329326dbb11caff449",
            "link_m3u8": "https://vip.opstream12.com/20220415/10472_280e3a53/index.m3u8"
          },
          {
            "name": "3",
            "slug": "3",
            "filename": "bac-si-vo-danh-phan-8-doctor-who-season-8-tap-3",
            "link_embed": "https://vip.opstream12.com/share/cc75c256acc04ce25a291c4b7a9856c0",
            "link_m3u8": "https://vip.opstream12.com/20220415/10473_ff102cf7/index.m3u8"
          },
          {
            "name": "4",
            "slug": "4",
            "filename": "bac-si-vo-danh-phan-8-doctor-who-season-8-tap-4",
            "link_embed": "https://vip.opstream12.com/share/089d24462fdf4565642728e609db8a7c",
            "link_m3u8": "https://vip.opstream12.com/20220415/10474_d434b533/index.m3u8"
          },
          {
            "name": "5",
            "slug": "5",
            "filename": "bac-si-vo-danh-phan-8-doctor-who-season-8-tap-5",
            "link_embed": "https://vip.opstream12.com/share/ca5520b5672ea120b23bde75c46e76c6",
            "link_m3u8": "https://vip.opstream12.com/20220415/10475_ea8d1ebd/index.m3u8"
          },
          {
            "name": "6",
            "slug": "6",
            "filename": "bac-si-vo-danh-phan-8-doctor-who-season-8-tap-6",
            "link_embed": "https://vip.opstream12.com/share/13844d01d85a85bed47338e396b2aa3d",
            "link_m3u8": "https://vip.opstream12.com/20220415/10476_0d66ac89/index.m3u8"
          },
          {
            "name": "7",
            "slug": "7",
            "filename": "bac-si-vo-danh-phan-8-doctor-who-season-8-tap-7",
            "link_embed": "https://vip.opstream12.com/share/99bf3d153d4bf67d640051a1af322505",
            "link_m3u8": "https://vip.opstream12.com/20220415/10477_24f18a00/index.m3u8"
          },
          {
            "name": "8",
            "slug": "8",
            "filename": "bac-si-vo-danh-phan-8-doctor-who-season-8-tap-8",
            "link_embed": "https://vip.opstream12.com/share/5301386c592331424197d34172de723a",
            "link_m3u8": "https://vip.opstream12.com/20220415/10478_254e6af7/index.m3u8"
          },
          {
            "name": "9",
            "slug": "9",
            "filename": "bac-si-vo-danh-phan-8-doctor-who-season-8-tap-9",
            "link_embed": "https://vip.opstream12.com/share/3c63ec7be1b6c49e6c308397023fd8cd",
            "link_m3u8": "https://vip.opstream12.com/20220415/10484_4a90c702/index.m3u8"
          },
          {
            "name": "10",
            "slug": "10",
            "filename": "bac-si-vo-danh-phan-8-doctor-who-season-8-tap-10",
            "link_embed": "https://vip.opstream12.com/share/b62682b1aee36c174fb06aa3527f43e8",
            "link_m3u8": "https://vip.opstream12.com/20220415/10491_ac33230c/index.m3u8"
          },
          {
            "name": "11",
            "slug": "11",
            "filename": "bac-si-vo-danh-phan-8-doctor-who-season-8-tap-11",
            "link_embed": "https://vip.opstream12.com/share/b4e62d5681b956d7cf98e467f6427ae4",
            "link_m3u8": "https://vip.opstream12.com/20220415/10500_08c84502/index.m3u8"
          },
          {
            "name": "12",
            "slug": "12",
            "filename": "bac-si-vo-danh-phan-8-doctor-who-season-8-tap-12",
            "link_embed": "https://vip.opstream12.com/share/8ec2ba5e96ec1c050bc631abda80f269",
            "link_m3u8": "https://vip.opstream12.com/20220415/10513_50c01e36/index.m3u8"
          },
          {
            "name": "13",
            "slug": "13",
            "filename": "bac-si-vo-danh-phan-8-doctor-who-season-8-tap-13",
            "link_embed": "https://vip.opstream12.com/share/ebd64e2bf193fc8c658af2b91952ce8d",
            "link_m3u8": "https://vip.opstream12.com/20220415/10525_13ec9389/index.m3u8"
          }
        ]
      }
    ]
  },
  {
    "modified": {
      "time": "2024-03-07T15:11:57.000Z"
    },
    "_id": "659fa0ed7074f826ccc65ddb",
    "name": "Vòng Vây Cá Mập",
    "slug": "vong-vay-ca-map",
    "origin_name": "No Way Up",
    "content": "<p>Các nhân vật có hoàn cảnh khác nhau gặp nhau khi chiếc máy bay họ đang di chuyển đâm xuống Thái Bình Dương. Một cuộc chiến sinh tồn ác mộng xảy ra sau đó khi nguồn cung cấp không khí cạn kiệt và những nguy hiểm đang rình rập từ mọi phía.</p>",
    "type": "single",
    "status": "completed",
    "thumb_url": "https://img.ophim12.cc/uploads/movies/vong-vay-ca-map-thumb.jpg",
    "poster_url": "https://img.ophim12.cc/uploads/movies/vong-vay-ca-map-poster.jpg",
    "is_copyright": false,
    "sub_docquyen": true,
    "chieurap": true,
    "trailer_url": "https://www.youtube.com/watch?v=e1k1PC0TtmE",
    "time": "90 Phút",
    "episode_current": "Full",
    "episode_total": "1",
    "quality": "HD",
    "lang": "Vietsub",
    "notify": "",
    "showtimes": "",
    "year": 2024,
    "view": 202,
    "actor": [
      "Sophie McIntosh",
      "Will Attenborough",
      "Jeremias Amoore",
      "Manuel Pacific",
      "Grace Nettle",
      "Phyllis Logan",
      "Colm Meaney",
      "James Carroll Jordan",
      "David J Biscoe",
      "David Samartin"
    ],
    "director": [
      "Claudio Fäh"
    ],
    "category": [
      {
        "id": "620a21b2e0fc277084dfd0c5",
        "name": "Hành Động",
        "slug": "hanh-dong"
      },
      {
        "id": "620a22ace0fc277084dfd531",
        "name": "Kinh Dị",
        "slug": "kinh-di"
      }
    ],
    "country": [
      {
        "id": "620a2370e0fc277084dfd91e",
        "name": "Anh",
        "slug": "anh"
      }
    ],
    "episodes": [
      {
        "server_name": "Vietsub #1",
        "server_data": [
          {
            "name": "Full",
            "slug": "full",
            "filename": "No.Way.Up.2024.1080p.AMZN.WEBRip.1400MB.DD5.1.x264-GalaxyRG",
            "link_embed": "https://vip.opstream13.com/share/2ef35a8b78b572a47f56846acbeef5d3",
            "link_m3u8": "https://vip.opstream13.com/20240218/2882_669dfb1d/index.m3u8"
          }
        ]
      }
    ]
  },
]

const createBot = () => {
  const bot = new TelegramBot(botToken, {
    polling: environment != 'production'
  })

  bot.setMyCommands([
    {
      command: "start",
      description: "Wellcome ophim bot",
    },
    {
      command: "about",
      description: "This is about ophim bot",
    },
  ], {
    scope: {
      type: "all_private_chats"
    },
    language_code: "en"
  })

  bot.onText(/\/start/, async (msg) => {
    bot.sendPhoto(msg.chat.id, 'https://www.impactbnd.com/hubfs/marketing-chatbot-examples.jpg', {
      caption: `👾 Welcome to a universe packed with FUN movie! \n\n🤩 Type @ophim_m_bot in any chat or channel, pick your favorite movie and cash in on your skills! 💸 🚀`,
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: '📺 Search',
              switch_inline_query_current_chat: ''
            },
          ],
          [
            {
              text: '🔥 Favorite',
              switch_inline_query_current_chat: 'favorite'
            },
            {
              text: '🎪 About',
              callback_data: "about"
            },
          ],
        ]
      }
    })
  });

  bot.on('inline_query', async (query) => {
    const limit = 20
    const offset = query.offset ? parseInt(query.offset, 10) : 0
    const page = (offset / limit) + 1
    const movies = await searchMovies(query.query, limit, offset)
    bot.answerInlineQuery(query.id, movies.map(el => {
      return {
        id: `${el.id}`,
        type: 'article',
        title: el.name,
        input_message_content: {
          message_text: `\u200B\u200B\u200B**${el.name}** \n-\n[${el.year}] ${el.origin_name} - ${moment(el.modified_time).fromNow()} `,
          disable_web_page_preview: false,
          parse_mode: 'Markdown'
        },
        thumb_url: el.thumb_url,
        thumb_height: 100,
        thumb_width: 100,
        description: `[${el.year}] ${el.origin_name} - ${moment(el.modified_time).fromNow()} `,
      }
    }), {
      is_personal: true,
      next_offset: `${limit * page} `,
      cache_time: 10,
    })
  })

  bot.on('message', (msg) => {
    if (msg.text?.startsWith('\u200B\u200B\u200B')) {
      const text = msg.text.replace('\u200B\u200B\u200B', '').split('\n')[0] || ''
      const movie = data.filter(el => el.name == text.trim())[0] || null
      if (movie) {
        let inlineKeyboardButton = []
        if (movie.trailer_url) {
          inlineKeyboardButton.push([
            {
              text: 'Trailer',
              web_app: {
                url: movie.trailer_url,
              }
            }
          ])
        }
        inlineKeyboardButton.push([
          {
            text: 'Episodes',
            callback_data: `episodes_${movie._id}`,
          },
          {
            text: '📺 Search other',
            switch_inline_query_current_chat: ''
          },
        ])
        bot.sendPhoto(msg.chat.id, movie.thumb_url, {
          reply_to_message_id: msg.message_id,
          caption: `**${movie.name}** \n-\n[${movie.year}] ${movie.origin_name} \n${movie.quality} - ${movie.lang}`,
          parse_mode: 'Markdown',
          reply_markup: {
            inline_keyboard: inlineKeyboardButton
          }
        })
      }
    }
  })

  bot.on('callback_query', (msg) => {
    if (msg.data?.startsWith('back_movie_')) {
      const id = msg.data.replace('episodes_', '').replace('back_movie_', '').trim()
      const movie = data.filter(el => el._id == id)[0] || null
      if (movie) {
        let inlineKeyboardButton = []
        if (movie.trailer_url) {
          inlineKeyboardButton.push([
            {
              text: 'Trailer',
              web_app: {
                url: movie.trailer_url,
              }
            }
          ])
        }
        inlineKeyboardButton.push([
          {
            text: 'Episodes',
            callback_data: `episodes_${movie._id}`,
          },
          {
            text: '📺 Search other',
            switch_inline_query_current_chat: ''
          },
        ])
        bot.editMessageReplyMarkup({
          inline_keyboard: inlineKeyboardButton
        }, {
          message_id: msg.message?.message_id,
          chat_id: msg.message?.chat.id
        })
      }
    }
    if (msg.data?.startsWith('episodes_')) {
      const text = msg.data.replace('episodes_', '').replace('back_movie_', '').trim()
      const id = text.split('_')[0] ?? "";
      let page = parseInt(text.split('_')[1] ?? 1)
      const limit = 36

      const movie = data.filter(el => el._id == id)[0] || null
      if (movie) {
        const data = movie.episodes[0].server_data || []
        if (page > Math.ceil(data.length / limit)) {
          page = Math.ceil(data.length / limit)
        }
        if (page <= 0) {
          page = 1
        }
        let offset = (page - 1) * limit
        // debug({ id, page, limit, offset });

        let inlineKeyboardButton = []
        if (data.length) {
          for (const groupData of chunks(data.slice(offset, limit + offset), 6)) {
            let items = []
            for (const item of groupData) {
              items.push({
                text: item.name,
                web_app: {
                  url: item.link_embed
                }
              })
            }
            inlineKeyboardButton.push(items)
          }
          if (data.length > limit) {
            inlineKeyboardButton.push([
              {
                text: '◀️ Prev',
                callback_data: `episodes_${id}_${page - 1}`
              },
              {
                text: '▶️ Next',
                callback_data: `episodes_${id}_${page + 1}`
              }
            ])
          }
        }
        inlineKeyboardButton.push([
          {
            text: "⬅️ Back",
            callback_data: `back_movie_${movie._id}`
          }
        ])
        bot.editMessageReplyMarkup({
          inline_keyboard: inlineKeyboardButton
        }, {
          message_id: msg.message?.message_id,
          chat_id: msg.message?.chat.id
        })
      }
    }
  })

  return bot
}

module.exports = createBot