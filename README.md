<img width="541" alt="Screenshot 2024-05-19 at 15 19 58" src="https://github.com/ogatakatsuya/OopsHub/assets/130939004/62c605f7-e396-4f83-a4d7-5891c8eee10b">
<img width="721" alt="Screenshot 2024-05-19 at 15 13 03" src="https://github.com/ogatakatsuya/OopsHub/assets/130939004/3adf7546-dcc5-40ec-8728-5c87463935cb">
# 要件定義等
https://www.figma.com/board/X4dV2zyQF0GhyDsRL1CjZf/Hackathon-vol5?node-id=9%3A345&t=LmbovPPepX7hz0F6-1

# 環境構築
docker-compose.ymlがある階層で以下を実行

`docker compose up`

requirements.txtの変更やpackage.jsonの変更をイメージに反映させる時

`docker compose up --build`

docker-daemon is not runningが出た場合

docker desktopを起動する

backendで修正があったなら、
`python3 manage.py migrate`
