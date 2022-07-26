# typoglycemia image

## 目的

- Docker イメージを開発する経験を積む

## やること

とある Node.js コマンドを開発し、作成したコマンドを実行する Docker イメージ（の元になる Dockerfile）を作成する。

作成する Docker イメージは出来る範囲でスモールサイズかつセキュアにする。

## 作るコマンド

入力した文章を Typoglycemia にして出力する。

## 実行イメージ

```sh
docker container run -i --rm rusconn/typoglycemia:1.0.0 < input.txt > output.txt
```

input.txt

> The reason for this is surely that identifying content by parallel processing speeds up recognition. We only need the first and last two leters to spot changes in meaning.

output.txt

> The raoesn for this is sulery that iftdyneinig ctneont by pllareal poisensrcg spdees up roneotciign. We only need the first and last two lreets to spot chgaens in maening.
