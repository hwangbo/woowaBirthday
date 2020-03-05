const axios = require('axios');
const qs = require('qs');

const appMentionEventBlocks = async (channel, token) => {
    const modal = [
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "노래를 등록하시거나, 노래를 추천해드립니다~"
            }
        },
        {
            "type":
                "actions",
            "elements":
                [
                    {
                        "type": "button",
                        "action_id": "add_song",
                        "text": {
                            "type": "plain_text",
                            "text": "노래 등록하기",
                            "emoji": true
                        },
                        "value": "click_me_123",
                    },
                    {
                        "type": "button",
                        "action_id": "give_song",
                        "text": {
                            "type": "plain_text",
                            "text": "노래 추천 받기",
                            "emoji": true
                        },
                    }
                ]
        }
    ];
    const args = {
        token: token,
        channel: channel,
        text: "노래 추천 해드릴께요",
        blocks: JSON.stringify(modal)
    };
    const result = await axios.post(`https://slack.com/api/chat.postMessage`, qs.stringify(args));
};

module.exports = appMentionEventBlocks;