import * as shared from "shared"

shared.app.set('port'    , shared.env.PORT)
shared.app.set('hostname', 'localhost')


shared.app
  .get('/',
    async function (req, res) {
      console.log('get', req.path, req.body)
      await res.redirect("https://raw.githubusercontent.com/yebekhe/TelegramV2rayCollector/main/sub/normal/mix")
    })

shared.app
  .listen(
    shared.app.get('port'),
    shared.app.get('hostname'),
    function () {
      console.log(`Started listening at https://${shared.app.get('hostname')}:${shared.app.get('port')}`)
    })
